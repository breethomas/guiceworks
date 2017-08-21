// @flow
import React from 'react'
import css, { media2 } from '../styles/css'
import SerifBold from './SerifBold'

type Props = {
  tag?: string,
}

const style = css(
  { fontSize: 40 },
  media2({ fontSize: 74 }),
)

const Heading = ({ tag, ...props }: Props) => (
  <SerifBold className={style} tag={tag} {...props} />
)

Heading.defaultProps = {
  tag: 'h2',
}

export default Heading
