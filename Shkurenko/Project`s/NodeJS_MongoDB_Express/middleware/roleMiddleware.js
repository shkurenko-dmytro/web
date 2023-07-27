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
                return res.status(403).json({accessError: "The user is not authorized"});
            }
            const {role:userRole} = jwt.verify(token, config.secret);
            let hasRole = false;
            if(userRole == role  ){
                hasRole = true;
            }
            if(!hasRole){
                return res.status(403).json({accessError: "You have no access"});
            }
            next();
    
    
        } catch (error) {
            console.log(error);
            return res.status(403).json({accessError: "The user is not authorized"});
        }    }
    
}