import { Application } from "express";
import AuthRoutes from '../Routers/Auth/Auth.routes';

export default (app: Application) => {
    app.use('/api', AuthRoutes)
}