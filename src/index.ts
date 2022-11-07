import 'dotenv/config'
import { App } from './app'
import {AuthenticationRouter} from './Auth/Auth.routes'

const app = new App([
    new AuthenticationRouter(),
]);

app.listen()