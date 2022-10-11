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
