import moment from 'moment'
import React from 'react'
import { Email } from 'nodemailer-react'

interface Props {
  username: string
  dates: string[]
  eventIds: string[]
  actorNames: string[]
}

// TODO: investigate if we need it
function formattedDate(date: Date) {
  return moment(date).format('YYYY-MM-DD HH:mm')
}

export const NotificationEmail: Email<Props> = ({
  username,
  actorNames,
  dates,
  eventIds,
}) => ({
  subject: 'You have unread notifications in serlo.org',
  body: (
    <>
      <p>Hello {username}</p>
      <br />
      {actorNames.map((actor, i) => {
        return (
          <div key={i}>
            <p>
              {actor} {eventIds[i]} {formattedDate(new Date(dates[i]))}
            </p>
            <br />
          </div>
        )
      })}
      <br />
      Best regards
      <br />
      <span>Serlo Team</span>
    </>
  ),
})
