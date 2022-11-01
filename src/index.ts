import express, {Application} from 'express';
const app:Application = express();

import resR from './router/res'
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(resR)
app.listen(1999)