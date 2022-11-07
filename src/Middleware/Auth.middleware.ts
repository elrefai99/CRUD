import { RequestUser } from "../Types/Auth/RequestUser";
import { Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'
import { DataStoreinTokens } from "../Types/Auth/DataStoredTokens";
import { UserModel } from "../Models/User/User.model";

const verifyToken = async (req: RequestUser | any, res: Response, next: NextFunction) => {
    const token = req.body.token || req.query.token || req.cookies.token || req.headers['token'];

    if(token){
        try{
            const secret_token = process.env.TokenSecret as string;

            const user_id = await jwt.verify(token, secret_token) as DataStoreinTokens;
            const id = user_id?._id;

            const user = await UserModel.findById(id);
            if(user){
                req.user = user;
                next()
            }else{
                res.status(403).json("there was an error creating")
            }
        }catch(err){
            res.status(500).json({message: err})
        }
    }else{
        res.status(403).json('Authentication failed')
    }
}

export default verifyToken;