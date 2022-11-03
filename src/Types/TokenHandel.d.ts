import { Request } from "express";
import userID from './userId'

interface RequestAuthintication extends Request {
    user: userID
}

export default RequestAuthintication