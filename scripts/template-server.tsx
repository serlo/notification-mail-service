import express from 'express'
import ReactDOMServer from 'react-dom/server'

import { getNotificationsQueryResponse } from '../__fixtures__/notifications'
import { NotificationEmailComponent } from '../src/mail-service/templates'
import * as de from '../src/mail-service/templates/helper/language-strings/german-strings'

const events = getNotificationsQueryResponse.notifications.nodes.map(
  (node) => node.event,
)
const port = 8077
const api = express()

api.get('/', (_req, res) => {
  const content = ReactDOMServer.renderToString(
    <NotificationEmailComponent
      events={events}
      username="user"
      strings={de.strings}
    />,
  )
  const html = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Notification Template</title>
      </head>
      <body>
        ${content}
      </body>
    </html>`

  res.setHeader('Content-Type', 'text/html')
  res.send(html)
})

api.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`View templates at http://localhost:${port}/`)
})
