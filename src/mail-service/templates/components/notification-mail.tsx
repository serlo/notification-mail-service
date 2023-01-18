import { Instance } from '../../../gql/graphql'
import * as en from '../helper/language-strings/english-strings'
import * as fr from '../helper/language-strings/french-strings'
import * as de from '../helper/language-strings/german-strings'
import * as hi from '../helper/language-strings/hindi-strings'
import * as es from '../helper/language-strings/spanish-strings'
import * as ta from '../helper/language-strings/tamil-strings'
import { Event, EventComponent } from './event'

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
  if (!language) {
    //TODO
  }
  const strings = getLanguageStrings(language)
  //TODO
  if (!strings) throw Error
  return (
    <>
      <p>{strings.greeting}</p>
      <br />
      <p>{strings.initiation}</p>
      <br />
      {events.map((event) => {
        return <EventComponent event={event} key={event.id} />
      })}
      <br />
      <p>{strings.settings}</p>
    </>
  )
}

function getLanguageStrings(language: Instance | null) {
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
