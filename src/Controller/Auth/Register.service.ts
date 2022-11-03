import { Request, Response, NextFunction } from "express"
import { hash, genSalt } from "bcrypt";
import UserModel from "../../Models/User/User.model";
// import { TokenByUserId } from "../../Functions/jwt/cookie.jwt";

export const RegisterController = async (req: Request, res: Response, next: NextFunction) => {
    try{
        // Hash Password
        const salt = await genSalt(10);
        const password = await hash(req.body.password, salt);

        // get data as json
        const {first_name ,last_name ,email} = req.body;

        // username
        const username = first_name + '_' + last_name;

        // check email
        const getEmail = await UserModel.findOne({email: email})
        if(getEmail){
            res.status(403).json({status: 403, message: 'Email already exists'})
        }else{
            const user = await new UserModel({first_name, last_name,email, password, username});
            await user.save();

            res.status(200).json({status: 200, message: 'Success add to database, Welcome with us 🤗'})
            next();
        }
        
    }catch(err){
        res.status(200).json({message: err})
    }
}