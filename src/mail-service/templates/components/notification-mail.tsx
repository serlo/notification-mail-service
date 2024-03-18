import { Event, EventComponent } from './event'
import { domain } from '../../../config'
import { Instance } from '../../../gql/graphql'
import { replacePlaceholders } from '../helper/replace-placeholders'
import { LanguageStrings } from '../helper/type-language-strings'

interface Props {
  username: string
  events: Event[]
  language?: Instance | null
  strings: LanguageStrings
}

export function NotificationEmailComponent({
  username,
  events,
  strings,
}: Props) {
  const link = (
    <a href={`${domain}/subscriptions/manage`} target="_blank" rel="noreferrer">
      {strings.email.linkText}
    </a>
  )
  return (
    <>
      <p>{replacePlaceholders(strings.email.greeting, { username })}</p>
      <br />
      <p>{strings.email.initiation}</p>
      <br />
      {renderEvents(isThreadEvent)}
      <br />
      {renderEvents((event) => !isThreadEvent(event))}
      <br />
      <p>{replacePlaceholders(strings.email.settings, { link })}</p>
    </>
  )

  function renderEvents(predicate: (x: Event) => boolean) {
    return events.filter(predicate).map((event) => {
      if (!event) return <></>
      return <EventComponent event={event} key={event.id} strings={strings} />
    })
  }
}

function isThreadEvent(event: Event): boolean {
  if (!event) return false
  return (
    event.__typename === 'CreateThreadNotificationEvent' ||
    event.__typename === 'CreateCommentNotificationEvent' ||
    event.__typename === 'SetThreadStateNotificationEvent'
  )
}
