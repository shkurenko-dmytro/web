import User from "./User.js";
import Role from "./Role.js";
import bcrypt from "bcryptjs" 
import { validationResult } from "express-validator";
import  jwt  from "jsonwebtoken";
import  config  from "./config.js";
const generateAccessToken = (id, role) => {
    const payload = {
        id,
        role,
    }

    return jwt.sign(payload, config.secret, {expiresIn: "1h"} )
}

class authController{

    async registration(req, res){

        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({message: "Check the entered data", errors})
            }
            const {username, password} = req.body;
            const candidate = await User.findOne({userName:username});
            if (candidate){
                return res.status(400).json({usernameError: "A user with this name already exists"})
            }

            const hashPassword = bcrypt.hashSync(password)
            const userRole = await Role.findOne({value:"USER"})
            const user = User.create({userName: username, password: hashPassword, role: userRole.value})
            return res.status(200).json({usernameError: "The user is registered"})
            
        } catch (error) {
            console.log(error.message);
            res.status(400).json({registrationError:"Registration error"})
        }
    }

    async login (req, res){

        try {
            const {username, password} = req.body;
            const user = await User.findOne({userName: username});
            if (!user){
                return res.status(400).json({usernameError: `User ${username} not low`})
            }
            const validPassword = bcrypt.compareSync(password, user.password )
            if(!validPassword){
                return res.status(400).json({passwordError: `Incorrect password`})
            }
            const token = generateAccessToken(user._id, user.role);
            return res.json({token})
        } catch (error) {
            console.log(error.message);
            res.status(400).json({loginError: "Login error"})
        }
    }

    async getUsers(req, res){

        try {
            const users = await User.find()
            res.json(users);
            
        } catch (error) {
            console.log(error.message);
            res.json(error.message);
        }
    }
}

export default new authController()