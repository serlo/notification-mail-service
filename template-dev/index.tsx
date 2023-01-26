import ReactDOM from 'react-dom/client'

import { getNotificationsQueryResponse } from '../__fixtures__/notifications'
import { NotificationEmailComponent } from '../src/mail-service/templates'
import * as de from '../src/mail-service/templates/helper/language-strings/german-strings'

const events = getNotificationsQueryResponse.notifications.nodes.map(
  (node) => node.event
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <NotificationEmailComponent
    events={events}
    username="user"
    strings={de.strings}
  />
)
