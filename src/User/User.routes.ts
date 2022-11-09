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
    }
}
