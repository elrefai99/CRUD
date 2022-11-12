import { ControllerInterFaces } from "../Types/Controller/Controller";
import verifyToken from "../Middleware/Auth.middleware";
import { Router } from 'express';


export class UserRoutes implements ControllerInterFaces {
    public path = '/api';
    public router = Router();

    constructor() {
        this.initializeRoutes();
    }
    private initializeRoutes(){
        this.router.get(`${this.path}/`, verifyToken,)

    }
}
