import { Request } from 'express'

import { AppResponse, Exception } from './utils'

export const response = (_: Request, res: AppResponse, next: () => unknown) => {
  res.success = <T>(status_code: number, msg: string, data?: T | null) => {
    res.status(status_code).json({
      status: true,
      code: status_code,
      message: msg,
      data: data,
    })
  }

  res.error = (exception: Exception) => {
    res.status(exception.code).json({
      status: false,
      code: exception.code,
      message: exception.message,
      data: null,
      error: exception.innerError,
    })
  }

  next()
}
