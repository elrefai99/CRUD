import { DataStoreinTokens } from './../../Types/Auth/DataStoredTokens.d';
import { sign } from "jsonwebtoken";

export const MaxAge: number = 6 * 24 * 60 * 60 * 1000;

export const TokenUserIDCookies = (id: DataStoreinTokens) => {
    return sign({id}, process.env.TokenSecret as string, {expiresIn: MaxAge})
}