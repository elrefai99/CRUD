import { ControllerInterFaces } from "../Types/Controller/Controller";
import { Router } from 'express';
import AuthenticationService from "./Auth.service";

export class AuthenticationRouter implements ControllerInterFaces{
    public path = '/api';
    public router = Router();
    public authService = new AuthenticationService()

    constructor() {
        this.initializeRoutes();
    }
    private initializeRoutes(){
        // Regsiter
        this.router.post(`${this.path}/regsiter`, this.authService.RegisterController)
    }
}