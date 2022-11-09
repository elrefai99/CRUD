import 'dotenv/config'
import { App } from './app'
import {AuthenticationRouter} from './Auth/Auth.routes'
import { UserRoutes } from './User/User.routes';
import validateEnv from './Utils/validateEnv';

validateEnv()

const app = new App([
    new AuthenticationRouter(),
    new UserRoutes()
]);

app.ErrorRequest404()

app.listen()