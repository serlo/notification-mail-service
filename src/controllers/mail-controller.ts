import messages from "../constants/messages";
import statusCodes from "../constants/status-codes";
import { Exception } from "../helpers/exception";
import mailService from "../services/mail-service";
import { Request, Response, NextFunction, Application } from 'express';
import { ExpressResponse } from "../types";

const sendNotificationEmail = async (req: Request, res: ExpressResponse, next: NextFunction) => {
    let [data, error] = await mailService.sendEmailToUser();

    if (data) {
        return res.success?.(
            statusCodes.SUCCESS, 
            messages.SUCCESS, 
            data
        );
    } else {
        return res.error?.(
            new Exception(
                statusCodes.SERVER_ERROR, 
                messages.FAILURE, 
            )
        );
    }
}

export default {
    sendNotificationEmail
};
