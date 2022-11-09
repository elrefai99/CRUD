// import { UserModel } from "../Models/User/User.model";
import { Request, Response, NextFunction } from 'express';


export class UserController {

    public getUserAccount (req: Request | any, res: Response, _next: NextFunction) {
        res.status(200).json(req.user.id)
    }
}