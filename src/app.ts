import express, {Application} from 'express';
import {connect, ConnectOptions} from 'mongoose';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import { ControllerInterFaces } from './Types/Controller/Controller';

export class App {
    public app: Application;

    constructor(controller: ControllerInterFaces[]){
        this.app = express();

        // Setup
        this.initializeSetUps()
        this.controllerHanedl(controller)
    }

    // Setup
    private initializeSetUps(){
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: true}))
        this.app.use(morgan('dev'))
        this.app.use(helmet())
        this.app.use(cors())
        this.app.use(cookieParser())
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
}