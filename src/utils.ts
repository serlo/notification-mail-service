import * as express from 'express'
import moment from 'moment'

export const formattedDate = (date: Date) => {
  return moment(date).format('YYYY-MM-DD HH:mm')
}

export interface AppResponse extends express.Response {
  success?: <T>(status: number, message: string, data: T) => void
  error?: (exception: Exception) => void
}

export class Exception extends Error {
  innerError?: Error
  code: number
  constructor(code: number, message: string | undefined, innerError?: Error) {
    super(message)
    this.code = code
    this.innerError = innerError
  }
}
