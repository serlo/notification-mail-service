export class Exception extends Error {
    innerError?: any;
    code: number;
    constructor(code: number, message: string | undefined, innerError = null) {
        super(message);
        this.code = code;
        this.innerError = innerError;
    }
};
