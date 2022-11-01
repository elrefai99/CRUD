import 'dotenv/config'
import express, {Application} from 'express';
import setupOther from './Utils/Others/setup.other';
import MongoDB from './Utils/DB/Mongo.DB';

const app: Application = express();

// Connect with MongoDB and run server
MongoDB(app)

// Middleware
setupOther(app)