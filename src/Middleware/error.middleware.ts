import { NextFunction, Request, Response } from 'express';
import HttpException from '../Errors/HttpException';

function errorMiddleware(error: HttpException, _req: Request, res: Response, _next: NextFunction) {
    const code = error.code || 500;
    const status = error.status || "Server Down";
    const message = error.message || 'Something went wrong';
    res.status(code).json({code, status, message});
}

export default errorMiddleware;