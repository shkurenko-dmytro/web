import  jwt from "jsonwebtoken";
import config from "../config.js";
export default function (req, res, next) {
    if(req.method === "OPTIONS"){
        next();
    }
    // try {
    //     const token = req.headers.authorization.split(' ')[1];
    //     if(!token){
    //         return res.status(403).json({accessError: "The user is not authorized"});
    //     }
    //     const decodedData = jwt.verify(token, config.secret);
    //     req.user = decodedData;
    //     next();


    // } catch (error) {
    //     console.log(error);
    //     return res.status(403).json({accessError: "The user is not authorized"});
    // }
    try {
        const token = req.query.token
        if(!token){
            return res.status(403).json({accessError: "The user is not authorized"});
        }
        const decodedData = jwt.verify(token, config.secret);
        req.user = decodedData;
        next();


    } catch (error) {
        console.log(error);
        return res.status(403).json({accessError: "The user is not authorized"});
    }
}
