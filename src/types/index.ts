import * as express from 'express'
import { Exception } from '../helpers/exception'

export interface AppResponse extends express.Response {
  success?: <T>(status: number, message: string, data: T) => void
  error?: (exception: Exception) => void
}

export interface EmailPayload {
  user_id: number
  username: string
  email: string
  ids: string[]
  body: string
}
export interface EmailData {
  user_id: number
  username: string
  email: string
  event_id: number
  date: Date
  actor_name: string
  id: string
  ids: string[]
  body: string
}
