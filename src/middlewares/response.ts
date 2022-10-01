
export default (req: any, res: any, next: () => void) => {
    res.success = (status_code: number, msg: string, data: any = null) => {
        res.status(status_code).json({
            status: true, 
            code: status_code,
            message: msg, 
            data: data
        });
    }

    res.error = (exception: any) => {
        res.status(exception.code).json({
            status: false, 
            code: exception.code, 
            message: exception.message, 
            data: null, 
            error: exception.innerError 
        });
    }
    
    next();
};