import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import './App.css'

interface Props {
  username: string
  dates: string[]
  eventIds: string[]
  actorNames: string[]
}

export function NotificationEmail({
  username,
  actorNames,
  dates,
  eventIds,
}: Props) {
  return (
    <>
      <p>Hello {username}</p>
      <br />
      {actorNames.map((actor, i) => {
        return (
          <div key={i}>
            <p>
              {actor} {dates[i]}
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
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/notifications"
          element={NotificationEmail({
            actorNames: ['admin', 'devuser'],
            dates: ['2022-11-15', '2022-11-15'],
            eventIds: ['1', '2'],
            username: 'user',
          })}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
