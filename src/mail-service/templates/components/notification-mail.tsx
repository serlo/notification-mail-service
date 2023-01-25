import { domain } from '..'
import { Instance } from '../../../gql/graphql'
import { replacePlaceholders } from '../helper/replace-placeholders'
import { LanguageStrings } from '../helper/type-language-strings'
import { Event, EventComponent } from './event'

interface Props {
  username: string
  events: Event[]
  language?: Instance | null
  strings: LanguageStrings
}

export function NotificationEmailComponent({
  username,
  events,
  language,
  strings
}: Props) {
  if (!language)
    return (
      <>
        <p>English message below</p>
        <br />
        <p>
          {NotificationEmailComponent({
            username,
            events,
            language: Instance.De,
            strings
          })}
        </p>
        <br />
        <p>
          {NotificationEmailComponent({
            username,
            events,
            language: Instance.En,
            strings
          })}
        </p>
      </>
    )
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
      {events
        .filter((event) => isThreadEvent(event))
        .map((event) => {
          return (
            <EventComponent event={event} key={event.id} strings={strings} />
          )
        })}
      <br />
      {events
        .filter((event) => !isThreadEvent(event))
        .map((event) => {
          return (
            <EventComponent event={event} key={event.id} strings={strings} />
          )
        })}
      <br />
      <p>{replacePlaceholders(strings.email.settings, { link })}</p>
    </>
  )
}

function isThreadEvent(event: Event): boolean {
  return (
    event.__typename === 'CreateThreadNotificationEvent' ||
    event.__typename === 'CreateCommentNotificationEvent' ||
    event.__typename === 'SetThreadStateNotificationEvent'
  )
}
