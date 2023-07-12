import  jwt from "jsonwebtoken";
import config from "../config.js";
export default function (role) {
    return function( req, res, next){
        if(req.method === "OPTIOMS"){
            next();
        }
        try {
            const token = req.headers.authorization.split(' ')[1];
            if(!token){
                return res.status(403).json({message: "Пользователь не авторизован"});
            }
            const {role:userRole} = jwt.verify(token, config.secret);
            let hasRole = false;
            if(userRole == role  ){
                hasRole = true;
            }
            if(!hasRole){
                return res.status(403).json({message: "У вас нет доступа"});
            }
            next();
    
    
        } catch (error) {
            console.log(error);
            return res.status(403).json({message: "Пользователь не авторизован"});
        }    }
    
}