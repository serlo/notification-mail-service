import { Event, EventComponent } from './event'

interface Props {
  username: string
  events: Event[]
}

export function NotificationEmailComponent({ username, events }: Props) {
  return (
    <>
      <p>Hello {username}</p>
      <br />
      {events.map((event) => {
        return <EventComponent event={event} key={event.id} />
      })}
      <br />
      Best regards
      <br />
      <span>Serlo Team</span>
    </>
  )
}
