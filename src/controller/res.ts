import { Request, Response, NextFunction } from "express";

export const res = (req: Request, res: Response, _next: NextFunction) => {
    try{
        res.status(200).json(req.body)
    }catch(err){
        res.status(500).json({message: err})
    }
}