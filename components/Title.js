// @flow
import React from 'react'
import css, { media2 } from '../styles/css'
import SerifBold from './SerifBold'

const style = css(
  { fontSize: 40 },
  media2({ fontSize: 80 }),
)

type Props = {
  tag?: string,
}

const Title = ({ tag, ...props }: Props) => (
  <SerifBold className={style} tag={tag} {...props} />
)

Title.defaultProps = {
  tag: 'h1',
}

export default Title

