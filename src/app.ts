import express, {Application} from 'express';
import {connect, ConnectOptions} from 'mongoose';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import { ControllerInterFaces } from './Types/Controller/Controller';
import errorMiddleware from './Middleware/error.middleware';
import { Request404Error } from './Errors/404/404.error';

export class App {
    public app: Application;

    constructor(controller: ControllerInterFaces[]){
        this.app = express();

        // Setup
        this.initializeSetUps()
        this.controllerHanedl(controller)
        this.ErrorRequest404()
    }

    // Setup
    private initializeSetUps(){
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: true}))
        this.app.use(morgan('dev'))
        this.app.use(helmet())
        this.app.use(cors())
        this.app.use(cookieParser())
        this.app.use(errorMiddleware)
    }

    private controllerHanedl(controller: ControllerInterFaces[]){
        controller.forEach((controllers) => {
            this.app.use('/', controllers.router);
        });
    }

    public listen(){
        const port = process.env.PORT || 1999;
        connect(process.env.DataBase_URL_Link as string, { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions)
            .then(() => {
                this.app.listen(port, () => {
                    console.log('API Server listening on port ' + process.env.API_URL)
                })
            }).catch(err => console.log(err))
    }
    public getServer() {
        return this.app;
    }

    public ErrorRequest404(){
        this.app.get("*", (_req, res) => {
            res.json(new Request404Error())
        })
    }
}