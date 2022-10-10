import messages from "../constants/messages";
import statusCodes from "../constants/status-codes";
import { Exception } from "../helpers/exception";
import mailService from "../services/mail-service";
import { Request, NextFunction } from 'express';
import { AppResponse } from "../types";

const sendNotificationEmail = async (_req: Request, res: AppResponse, _next: NextFunction) => {
    let [data] = await mailService.sendEmailToUser();

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
