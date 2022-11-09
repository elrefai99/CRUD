class HttpException extends Error {
    public code: number;
    public status: string;
    public message: string;
    constructor(code: number, status: string, message: string) {
        super(message);
        this.code = code;
        this.status = status;
        this.message = message;
    }
}

export default HttpException;