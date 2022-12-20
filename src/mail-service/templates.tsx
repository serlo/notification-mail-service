import moment from 'moment'
import React from 'react'

interface NotificationEmailProps {
  username: string
  events: Event[]
}

// TODO: investigate if we need it
function formattedDate(date: Date) {
  return moment(date).format('YYYY-MM-DD HH:mm')
}

interface Event {
  date: string
  eventId: string
  actorName: string // TODO: use actor object?
}

export function NotificationEmail({
  username,
  events,
}: NotificationEmailProps) {
  return (
    <>
      <p>Hello {username}</p>
      <br />
      {events.map((event) => {
        return <Event event={event} key={event.eventId} />
      })}
      <br />
      Best regards
      <br />
      <span>Serlo Team</span>
    </>
  )
}

function Event({ event }: { event: Event }) {
  const { date, actorName } = event
  return (
    <div>
      <p>
        {actorName} {date}
      </p>
      <br />
    </div>
  )
}
