import React from 'react'
// eslint-disable-next-line import/no-internal-modules
import ReactDOM from 'react-dom/client'

import { NotificationEmail } from '../src/mail-service/templates'

const events = [
  {
    actorName: 'admin',
    eventId: '1',
    date: '2022-11-15 00:00:00',
  },
  {
    actorName: 'devuser',
    eventId: '2',
    date: '2022-11-16 00:00:00',
  },
]

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <NotificationEmail events={events} username="user" />,
  document.getElementById('root')
)
