import  jwt from "jsonwebtoken";
import config from "../config.js";
export default function (role) {
    return function( req, res, next){
        if(req.method === "OPTIONS"){
            next();
        }
        try {
            const token = req.query.token
            if(!token){
                console.log("allert")
                return res.status(403).json({accessError: "The user is not authorized"});
            }
            const {role:userRole} = jwt.verify(token, config.secret);
            let hasRole = false;
            if(userRole == role  ){
                hasRole = true;
            }
            if(!hasRole){
                res.redirect('/auth/profile')
                //return res.status(403).json({accessError: "You have no access"});
            }
            next();
    
    
        } catch (error) {
            console.log(error);
            return res.status(403).json({accessError: "The user is not authorized"});
        }    }
    
}