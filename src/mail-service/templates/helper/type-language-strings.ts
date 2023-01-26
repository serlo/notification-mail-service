import { en, fr, de, hi, es, ta } from './language-strings'

const languages = [en, fr, de, hi, es, ta] as const

export type LanguageStrings = typeof languages[number]['strings']
