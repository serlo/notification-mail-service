import { domain } from '..'
import { Event, EventComponent } from './event'

interface Props {
  username: string
  events: Event[]
}

export function NotificationEmailComponent({ username, events }: Props) {
  return (
    <>
      <p>Hallo {username}!</p>
      <br />
      <p>
        Hier ist eine Übersicht, was mit Inhalten passiert ist, die du erstellt
        oder bearbeitet hast:
      </p>
      <br />
      {events.map((event) => {
        return <EventComponent event={event} key={event.id} />
      })}
      <br />
      <p>
        Zu welchen Inhalten du Benachrichtigungen erhältst, kannst du in den{' '}
        <a
          href={`${domain}/subscriptions/manage`}
          target="_blank"
          rel="noreferrer"
        >
          Einstellungen ändern.
        </a>
      </p>
    </>
  )
}
