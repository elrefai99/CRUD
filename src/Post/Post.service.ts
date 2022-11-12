import { PostModel } from "../Models/Post/Post.model";
import { Request, Response, NextFunction } from "express";

export class PostController {
    public async createPost (req: Request, res: Response, next: NextFunction) {
        try{
            
        }catch(err){
            res.status(500).json(err)
        }
    }
}