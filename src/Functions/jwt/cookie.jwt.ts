import { sign } from "jsonwebtoken";

const maxAge = 45 * 24 * 60 * 60;

export const TokenByUserId = async (id: string) => {
    return sign({id}, process.env.TokenSecret as string , {expiresIn: maxAge})
}