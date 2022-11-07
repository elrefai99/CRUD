// import bcrypt from 'bcrypt'
// import jwt from 'jsonwebtoken'
import { UserModel } from '../Models/User/User.model'
import { Request, Response, NextFunction } from 'express';

class AuthenticationService {
    public user = UserModel;

    public async RegisterController (req: Request, res: Response, next: NextFunction) {
        try{
            const data = req.body;

            const username = req.body.firstName + '_' + req.body.lastName
            data.username = username
            const User = new UserModel(data)
            await User.save()
            res.status(200).json({message: 'Success Data Saved'})
            next()
        }catch(err){
            res.status(500).json({message: err})
        }
    }
}

export default AuthenticationService