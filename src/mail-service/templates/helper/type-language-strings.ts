import * as en from './language-strings/english-strings'
import * as fr from './language-strings/french-strings'
import * as de from './language-strings/german-strings'
import * as hi from './language-strings/hindi-strings'
import * as es from './language-strings/spanish-strings'
import * as ta from './language-strings/tamil-strings'

const languages = [en, fr, de, hi, es, ta] as const

export type LanguageStrings = typeof languages[number]['strings']
