// @flow
import { css } from 'glamor'

type JSO = {
  [key: string]: string | number | null,
}

export default css

export const media = (query: string, ...styles: Array<JSO>) => (
  css({ [`@media ${query}`]: styles })
)

export const media1 = (...styles: Array<JSO>) => (
  css({ '@media (min-width: 32em)': styles })
)

export const media2 = (...styles: Array<JSO>) => (
  css({ '@media (min-width: 48em)': styles })
)

export const media3 = (...styles: Array<JSO>) => (
  css({ '@media (min-width: 64em)': styles })
)

export const media4 = (...styles: Array<JSO>) => (
  css({ '@media (min-width: 80em)': styles })
)

export const parent = (selector: string, ...styles: Array<JSO>) => (
  css({ [`${selector} &`]: styles })
)

export const modifier = (selector: string, ...styles: Array<JSO>) => (
  css({ [`&${selector}`]: styles })
)

export const select = (selector: string, ...styles: Array<JSO>) => (
  css({ [selector]: styles })
)

export const hover = (...styles: Array<JSO>) => (
  select('.no-touch &:hover', ...styles)
)

export const active = (...styles: Array<JSO>) => (
  select(':active', ...styles)
)

export const focus = (...styles: Array<JSO>) => (
  select(':focus', ...styles)
)

export const firstChild = (...styles: Array<JSO>) => (
  select(':first-child', ...styles)
)

export const before = (...styles: Array<JSO>) => (
  select('::before', ...styles)
)

export const after = (...styles: Array<JSO>) => (
  select('::after', ...styles)
)

export const placeholder = (...styles: Array<JSO>) => (
  select('::placeholder', ...styles)
)

export const disabled = (...styles: Array<JSO>) => (
  modifier('[disabled]', ...styles)
)

