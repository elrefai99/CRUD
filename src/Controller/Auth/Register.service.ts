import { Request, Response, NextFunction } from "express"

export const RegisterController = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const data = req.body;
        res.status(200).json(data)
        next();
    }catch(err){
        res.status(200).json({message: err})
    }
}