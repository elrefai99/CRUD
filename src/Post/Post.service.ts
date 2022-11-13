import { PostModel } from "../Models/Post/Post.model";
import { Request, Response, NextFunction } from "express";

export class PostController {
    public async createPost (req: Request | any, res: Response, next: NextFunction) {
        try{
            const data = req.user.id;
            const post = await new PostModel(data);
            await post.save();

            res.status(200).json('Data saved successfully')
            next();
        }catch(err){
            res.status(500).json(err)
        }
    }

    public async GetPost (_req: Request | any, res: Response, next: NextFunction) {
        try{
            const post = await PostModel.find();
            res.status(200).json(post)
            next();
        }catch(err){
            res.status(500).json(err)
        }
    }
    
    public async GetSinglePost (req: Request | any, res: Response, next: NextFunction) {
        try{
            const post = await PostModel.findById(req.params.id);
            res.status(200).json(post)
            next();
        }catch(err){
            res.status(500).json(err)
        }
    }

    public async UpdatelePost (req: Request | any, res: Response, next: NextFunction) {
        try{
            await PostModel.findByIdAndUpdate(req.params.id, {
                $set: req.body
            });
            res.status(200).json("Post updated successfully")
            next();
        }catch(err){
            res.status(500).json(err)
        }
    }

    public async DeletePost (req: Request | any, res: Response, next: NextFunction) {
        try{
            await PostModel.findByIdAndDelete(req.params.id);
            res.status(200).json(" Post deleted successfully")
            next();
        }catch(err){
            res.status(500).json(err)
        }
    }

    public async LikeePost (req: Request | any, res: Response, next: NextFunction) {
        try{
            const postID = await PostModel.findById(req.params.id);
            if(!postID?.likes.includes(req.user.id)){
                await postID?.updateOne({
                    $push: {
                        likes: req.user.id,
                    }
                })
                res.status(200).json("The post has been liked");
            }else{
                await postID?.updateOne({
                    $pull: {
                        likes: req.user.id,
                    }
                })
                res.status(200).json("The post has been disliked");
            } 
            next();
        }catch(err){
            res.status(500).json(err)
        }
    }
}