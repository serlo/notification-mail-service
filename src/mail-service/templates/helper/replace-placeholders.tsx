import { Fragment } from 'react'

// expects placeholders to be in this format: %placeholder%
export function replacePlaceholders(
  text: string,
  replaceables: { [key: string]: JSX.Element | string | undefined }
) {
  const replaceFn = (str: string, i: number) => (
    <Fragment key={i}>{replaceables[str] ?? `%${str}%`}</Fragment>
  )

  return text
    .split(/%(.+?)%/g)
    .map((str, i) => (i % 2 === 1 ? replaceFn(str, i) : str))
}
