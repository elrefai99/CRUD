import 'dotenv/config'
import express, {Application} from 'express';
import setupOther from './Utils/Others/setup.other';
import MongoDB from './Utils/DB/Mongo.DB';
import indexHooks from './Hooks/index.hooks';

const app: Application = express();

// Connect with MongoDB and run server
MongoDB(app)

// Middleware
setupOther(app)

// Routers
indexHooks(app)

//  Not Found - 404
app.get("*", (_req, res) => {
    res.status(404).json({ err: "Not Found" });
});