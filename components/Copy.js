// @flow
import React from 'react'
import css, { media2 } from '../styles/css'
import SansSerif from './SansSerif'

type Props = {
  isSmall?: boolean,
  tag?: string,
}

const style = css(
  {
    margin: '1em 0',
    fontSize: 16,
    lineHeight: 1.3,
  },
  media2({
    fontSize: 20,
  }),
)

const styleSmall = css(
  {
    margin: '1em 0',
    fontSize: 12,
    lineHeight: 1.3,
  },
  media2({
    fontSize: 14,
  }),
)

const Copy = ({ isSmall, tag, ...props }: Props) => (
  <SansSerif
    className={isSmall ? styleSmall : style}
    tag={tag}
    {...props}
  />
)

Copy.defaultProps = {
  isSmall: false,
  tag: 'p',
}

export default Copy

