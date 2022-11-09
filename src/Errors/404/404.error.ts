import HttpException from "../HttpException";

export class Request404Error extends HttpException {
    constructor(){
        super(404, "Failed", "Your request was not a valid request")
    }
}