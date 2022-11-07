import 'dotenv/config'
import { App } from './app'
import {AuthenticationRouter} from './Auth/Auth.routes'
import validateEnv from './Utils/validateEnv';

validateEnv()

const app = new App([
    new AuthenticationRouter(),
]);

app.listen()