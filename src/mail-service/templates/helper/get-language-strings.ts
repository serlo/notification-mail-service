import { en, fr, de, hi, es, ta } from './language-strings'
import { Instance } from '../../../gql/graphql'

export function getLanguageStrings(language: Instance) {
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
  }
}
