import { Request, NextFunction } from 'express'

import mailService from './mail-service/mail-service'
import { Exception } from './utils'
import { AppResponse } from './utils'

export const sendNotificationEmail = async (
  _req: Request,
  res: AppResponse,
  _next: NextFunction
) => {
  const [data] = await mailService.sendEmailToUser()

  if (data) {
    return res.success?.(statusCode.success, responseMessage.success, data)
  } else {
    return res.error?.(
      new Exception(statusCode.serverError, responseMessage.serverError)
    )
  }
}

enum statusCode {
  success = 200,
  serverError = 500,
}

enum responseMessage {
  success = 'Success',
  serverError = 'Something went wrong. Please try again later.',
}
