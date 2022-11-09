import HttpException from "../HttpException";

export class Request500Errpr extends HttpException {
    constructor() {
        super(401, "Failed", 'You have error code');
    }
}