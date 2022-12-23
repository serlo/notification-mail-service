import React from 'react'
// eslint-disable-next-line import/no-internal-modules
import ReactDOM from 'react-dom/client'

import { getNotificationsQueryResponse } from '../__fixtures__/notifications'
import { NotificationEmailComponent } from '../src/mail-service/templates'

const events = getNotificationsQueryResponse.notifications.nodes.map(
  (node) => node.event
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(<NotificationEmailComponent events={events} username="user" />)
