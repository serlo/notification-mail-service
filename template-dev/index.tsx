import React from 'react'
// eslint-disable-next-line import/no-internal-modules
import ReactDOM from 'react-dom/client'

import { NotificationEmailComponent } from '../src/mail-service/templates'

const events = [
  {
    actor: { username: 'admin' },
    id: 1,
    date: '2022-11-15 00:00:00',
  },
  {
    actor: { username: 'devuser' },
    id: 2,
    date: '2022-11-16 00:00:00',
  },
]

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(<NotificationEmailComponent events={events} username="user" />)
