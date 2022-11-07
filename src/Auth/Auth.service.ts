import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { UserModel } from '../Models/User/User.model'
import { Request, Response, NextFunction } from 'express';
import { MaxAge } from '../Functions/JWT/jwt.function';

class AuthenticationService {
    public user = UserModel;

    public async RegisterController (req: Request, res: Response, next: NextFunction) {
        try{
            const data = req.body;

            // Handel User Name
            const username = req.body.firstName + '_' + req.body.lastName
            data.username = username
            
            // Handle Password Hash
            const salt = await bcrypt.genSalt(8);
            const password = await bcrypt.hash(req.body.password, salt);
            data.password = password

            // Handle Email
            const find_Email = await UserModel.findOne({email: req.body.email})
            if(find_Email){
                res.status(403).json({code: 403, status: "Failed", message:"Email is used"})
            }else{
                // Add To DataBase
                const user = await new UserModel(data)
                await user.save()

                // Create Cookie
                const id = user._id
                const cookie = await jwt.sign({id}, process.env.TokenSecret as string, {expiresIn: MaxAge});
                res.cookie('_set', cookie, {httpOnly: true, maxAge: MaxAge, secure: true})
            
                res.status(200).json({code: 200, status: "Success", message: 'Success Data Saved, Welcome With US 🤗'})
                next()
            }
        }catch(err){
            res.status(500).json({message: err})
        }
    }
}

export default AuthenticationService