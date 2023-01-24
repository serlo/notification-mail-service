import { Instance } from '../../../gql/graphql'
import { Event, EventComponent } from './event'
import { replacePlaceholders } from '../helper/replace-placeholders'
import { domain } from '..'
import { getLanguageStrings } from '../helper/get-language-strings'

interface Props {
  username: string
  events: Event[]
  language: Instance | null
}

export function NotificationEmailComponent({
  username,
  events,
  language,
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
          })}
        </p>
        <br />
        <p>
          {NotificationEmailComponent({
            username,
            events,
            language: Instance.En,
          })}
        </p>
      </>
    )
  const strings = getLanguageStrings(language)
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
