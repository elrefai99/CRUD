// import { DataStoreinTokens } from './../Types/Auth/DataStoredTokens.d';
// import bcrypt from 'bcrypt'
// import jwt from 'jsonwebtoken'
import { UserModel } from '../Models/User/User.model'
// import {User} from '../Types/Auth/RequestUser';
import { Request, Response, NextFunction } from 'express';

class AuthenticationService {
    public user = UserModel;

    public async RegisterController (req: Request, res: Response, next: NextFunction) {
        try{
            res.status(200).json(req.body)
            next()
        }catch(err){
            res.status(500).json({message: err})
        }
    }
}

export default AuthenticationService