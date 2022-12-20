import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import './App.css'

interface NotificationEmailProps {
  username: string
  events: Event[]
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
        return <Event event={event} />
      })}
      <br />
      Best regards
      <br />
      <span>Serlo Team</span>
    </>
  )
}

function Event({ event }: { event: Event }) {
  const { date, eventId, actorName } = event
  return (
    <div key={eventId}>
      <p>
        {actorName} {date} 
      </p>
      <br />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/notifications"
          element={NotificationEmail({
            events: [{
              actorName: 'admin',
              eventId: '1',
              date: '2022-11-15 00:00:00'
            },
            {
              actorName: 'devuser',
              eventId: '2',
              date: '2022-11-16 00:00:00'
            }
          ],
            username: 'user',
          })}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
