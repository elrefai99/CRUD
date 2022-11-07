import {cleanEnv, port, str } from 'envalid';

function validateEnv() {
    cleanEnv(process.env, {
        TokenSecret: str(),
        DataBase_URL_Link: str(),
        API_URL: str(),
        Send_Email_Api_Key: str(),
        PORT: port(),
    });
}

export default validateEnv;