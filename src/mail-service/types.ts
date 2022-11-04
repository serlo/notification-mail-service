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
  event_ids: number[]
  dates: Date[]
  actor_names: string[]
  notification_ids: string[]
}
