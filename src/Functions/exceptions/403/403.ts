import { Response } from "express"

export const Error403 = async (status: number, message: string, res: Response) => {
    return res.status(status).json(message)
}