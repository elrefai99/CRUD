import { ControllerInterFaces } from "../Types/Controller/Controller";
import verifyToken from "../Middleware/Auth.middleware";
import { Router } from 'express';
import { UserController } from "./User.service";


export class UserRoutes implements ControllerInterFaces {
    public path = '/api';
    public router = Router();
    public userController = new UserController()

    constructor() {
        this.initializeRoutes();
    }
    private initializeRoutes(){
        this.router.get(`${this.path}/`, verifyToken, this.userController.getUserAccount)
        this.router.get(`${this.path}/system/update`, verifyToken, this.userController.UpdateUserController)
        this.router.get(`${this.path}/system/delet`, verifyToken, this.userController.DeleteUserController)
        this.router.get(`${this.path}/system/follow`, verifyToken, this.userController.FollowUserController)
        this.router.get(`${this.path}/system/unfollow`, verifyToken, this.userController.UnFollowUserController)

    }
}
