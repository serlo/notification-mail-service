import {domain} from '..'
import {Event, EventComponent} from './event'
import {Instance} from "../../../gql/graphql";
import * as de from "../helper/language-strings/german-strings";
import * as en from "../helper/language-strings/english-strings";
import * as es from "../helper/language-strings/spanish-strings";
import * as fr from "../helper/language-strings/french-strings";
import * as hi from "../helper/language-strings/hindi-strings";
import * as ta from "../helper/language-strings/tamil-strings";

interface Props {
  username: string
  events: Event[]
  language: Instance | null
}

export function NotificationEmailComponent({ username, events, language }: Props) {

  if (!language) {
    //TODO
  }
  else {
    const strings = getLanguageStrings(language)
  }

  // Work in Progress
  return (
    <>
      <p>Hallo {username}!</p>
      <br />
      <p>
        Hier ist eine Übersicht, was mit Inhalten passiert ist, die du erstellt
        oder bearbeitet hast:
      </p>
      <br />
      {events.map((event) => {
        return <EventComponent event={event} key={event.id} />
      })}
      <br />
      <p>
        Zu welchen Inhalten du Benachrichtigungen erhältst, kannst du in den{' '}
        <a
          href={`${domain}/subscriptions/manage`}
          target="_blank"
          rel="noreferrer"
        >
          Einstellungen ändern.
        </a>
      </p>
    </>
  )
}

function getLanguageStrings(language: Instance) {
  switch (language) {
    case Instance.De:
      return de.strings.email
    case Instance.En:
      return en.strings.email
    case Instance.Es:
      return es.strings.email
    case Instance.Fr:
      return fr.strings.email
    case Instance.Hi:
      return hi.strings.email
    case Instance.Ta:
      return ta.strings.email
    default:
      return null
  }
}
