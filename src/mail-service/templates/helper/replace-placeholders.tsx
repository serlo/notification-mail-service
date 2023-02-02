import { Fragment } from 'react'

import { replaceWithJSX } from './replace-with-jsx'

//expects placeholders to be in this format: %placeholder%

export function replacePlaceholders(
  string: string,
  replaceables: { [key: string]: JSX.Element | string }
) {
  return replaceWithJSX([string], /%(.+?)%/g, (str, i) => (
    <Fragment key={i}>{replaceables[str] ?? `%${str}%`}</Fragment>
  ))
}

function replaceWithJSX(
  input: (string | JSX.Element)[],
  regex: RegExp,
  fn: (str: string, i: number) => JSX.Element
) {
  return input.flatMap((str) => {
    if (typeof str == 'string') {
      const result = str.split(regex) as (string | JSX.Element)[]
      for (let i = 1; i < result.length; i += 2) {
        result[i] = fn(result[i] as string, i)
      }
      return result
    } else {
      return [str]
    }
  })
}
