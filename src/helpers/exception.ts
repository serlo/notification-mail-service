export class Exception extends Error {
    innerError?: Error;
    code: number;
    constructor(code: number, message: string | undefined, innerError?: Error) {
        super(message);
        this.code = code;
        this.innerError = innerError;
    }
};
