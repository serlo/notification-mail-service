import moment from 'moment'

interface NotificationEmailProps {
  username: string
  events: Event[]
}

// TODO: investigate if we need it
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function formattedDate(date: Date) {
  return moment(date).format('YYYY-MM-DD HH:mm')
}

interface Event {
  date: string
  id: number
  actor: {
    username: string
  }
}

export function NotificationEmailComponent({
  username,
  events,
}: NotificationEmailProps) {
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

function EventComponent({ event }: { event: Event }) {
  const { date, actor } = event
  return (
    <div>
      <p>
        {actor.username} {date}
      </p>
      <br />
    </div>
  )
}
