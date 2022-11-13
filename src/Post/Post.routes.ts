import { PostController } from './Post.service';
import { ControllerInterFaces } from "../Types/Controller/Controller";
import verifyToken from "../Middleware/Auth.middleware";
import { Router } from 'express';


export class UserRoutes implements ControllerInterFaces {
    public path = '/api';
    public router = Router();
    private post = new PostController()
    constructor() {
        this.initializeRoutes();
    }
    private initializeRoutes(){
        this.router.get(`${this.path}/getallpost`, verifyToken, this.post.GetPost)
        this.router.get(`${this.path}/getpost`, verifyToken, this.post.GetSinglePost)
        this.router.post(`${this.path}/create/post`, verifyToken, this.post.createPost)
        this.router.delete(`${this.path}/delete/post`, verifyToken, this.post.DeletePost)
        this.router.put(`${this.path}/update/post`, verifyToken, this.post.UpdatelePost)
        this.router.post(`${this.path}/like/post`, verifyToken, this.post.LikeePost)
    }
}
