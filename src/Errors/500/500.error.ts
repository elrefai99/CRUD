import HttpException from "../HttpException";

export class Request500Errpr extends HttpException {
    constructor() {
        super(500, "Failed", 'You have error code');
    }
}