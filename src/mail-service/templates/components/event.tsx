import { UserLink } from './user-link'
import { useInstanceData } from '../../../contexts/instance-context'
import { Fragment } from 'react'

export interface Event {
  __typename: string
  date: string
  id: number
  actor: {
    username: string
  }
  thread?: {

      nodes: {
        id: number
        archived: boolean
      }[]

  }
}

type EventThread = {

    nodes: {
      id: number
      archived: boolean
    }[]

}

export function EventComponent({ event }: { event: Event }) {
  const { date, actor } = event
  const { strings } = useInstanceData()
  return <div>renderText()</div>

  function renderText() {
    const actor = <UserLink username={event.actor.username} />

    switch (event.__typename) {
      case 'SetThreadStateNotificationEvent':
        if (event.thread)
          return parseString(
            event.thread.nodes[0].archived
              ? strings.events.setThreadStateArchived
              : strings.events.setThreadStateUnarchived,
            {
              thread: renderThread(event.thread),
            }
          )
    }
  }

  function parseString(
    string: string,
    replaceables: { [key: string]: JSX.Element | string }
  ) {
    replaceables.actor = <UserLink username={event.actor.username} />
    return replacePlaceholders(string, replaceables)
  }

  function replacePlaceholders(
    string: string,
    replaceables: { [key: string]: JSX.Element | string }
  ) {
    return replaceWithJSX([string], /%(.+?)%/g, (str, i) => (
      <Fragment key={i}>{replaceables[str] ?? `%${str}%`}</Fragment>
    ))
  }

  function replaceWithJSX(
    input: (string | JSX.Element)[],
    regex: RegExp,
    fn: (str: string, i: number) => JSX.Element
  ) {
    return input.flatMap((str) => {
      if (typeof str == 'string') {
        const result = str.split(regex) as (string | JSX.Element)[]
        for (let i = 1; i < result.length; i += 2) {
          result[i] = fn(result[i] as string, i)
        }
        return result
      } else {
        return [str]
      }
    })
  }

  function renderThread(thread: EventThread) {
    const id = thread.nodes[0].id
    return (
      <a href={`/${id}`}>
        {strings.entities.thread}&nbsp;<sup>{id}</sup>
      </a>
    )
  }
}
