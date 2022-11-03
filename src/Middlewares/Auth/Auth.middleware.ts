import { verify } from "jsonwebtoken";
import RequestAuthintication from "../../Types/TokenHandel";
import { Response, NextFunction } from "express";
import UserModel from "../../Models/User/User.model";
import UserID from "../../Types/userId";

const verifyToken = async (req: RequestAuthintication | any, res: Response, next: NextFunction) => {
    const token = req.body.token || req.headers['token'];

    if(token){
        const token_secret = process.env.TokenSecret as string;
        const userid = await verify(token, token_secret) as UserID;

        const user = await UserModel.findById(userid);
        if(user){
            req.user = user;
        }else{
            res.status(403).json("there was an error creating")
        }
    }

    next();
}

export default verifyToken;