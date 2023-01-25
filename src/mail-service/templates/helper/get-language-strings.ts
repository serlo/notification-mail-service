import { Instance } from '../../../gql/graphql'
import * as en from './language-strings/english-strings'
import * as fr from './language-strings/french-strings'
import * as de from './language-strings/german-strings'
import * as hi from './language-strings/hindi-strings'
import * as es from './language-strings/spanish-strings'
import * as ta from './language-strings/tamil-strings'

export function getLanguageStrings(language?: Instance | null) {
  switch (language) {
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
