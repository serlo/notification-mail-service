import { Instance } from '../../../gql/graphql'
import * as en from '../helper/language-strings/english-strings'
import * as fr from '../helper/language-strings/french-strings'
import * as de from '../helper/language-strings/german-strings'
import * as hi from '../helper/language-strings/hindi-strings'
import * as es from '../helper/language-strings/spanish-strings'
import * as ta from '../helper/language-strings/tamil-strings'
import { Event, EventComponent } from './event'
import { replacePlaceholders } from '../helper/replace-placeholders'
import { domain } from '..'

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
      {events.map((event) => {
        return <EventComponent event={event} key={event.id} strings={strings} />
      })}
      <br />
      <p>{replacePlaceholders(strings.email.settings, { link })}</p>
    </>
  )
}

export function getLanguageStrings(language: Instance | null) {
  switch (language) {
    case Instance.De:
      return de.strings
    case Instance.En:
      return en.strings
    case Instance.Es:
      return es.strings
    case Instance.Fr:
      return fr.strings
    case Instance.Hi:
      return hi.strings
    case Instance.Ta:
      return ta.strings
    default:
      return de.strings
  }
}
