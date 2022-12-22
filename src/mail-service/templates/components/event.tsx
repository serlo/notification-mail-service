export interface Event {
  date: string
  id: number
  actor: {
    username: string
  }
}

export function EventComponent({ event }: { event: Event }) {
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
