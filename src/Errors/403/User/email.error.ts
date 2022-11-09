import HttpException from "../../HttpException";

export class UserEmailAlreadyUsed extends HttpException {
    constructor() {
        super(403, "Failed", `User with email already exists`)
    }
}