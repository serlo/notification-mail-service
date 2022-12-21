import moment from 'moment'
import { Email } from 'nodemailer-react'
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
  id: number
  actor: {
    username: string
  }
}

export function NotificationEmail(props: NotificationEmailProps) {
  return {
    subject: 'You have unread notifications in serlo.org',
    body: NotificationEmailComponent(props),
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
        return <Event event={event} key={event.id} />
      })}
      <br />
      Best regards
      <br />
      <span>Serlo Team</span>
    </>
  )
}

function Event({ event }: { event: Event }) {
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
