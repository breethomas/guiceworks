// @flow
import React from 'react'
import css, { media2 } from '../styles/css'
import SansRegular from './SansRegular'
import SansThin from './SansThin'

type Props = {
  isSmall?: boolean,
  isThin?: boolean,
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

const Copy = ({ isSmall, isThin, tag, ...props }: Props) => {
  const textProps = { className: isSmall ? styleSmall : style, tag }
  return isThin ?
    <SansThin {...textProps} {...props} />
  :
    <SansRegular {...textProps} {...props} />
}

Copy.defaultProps = {
  isSmall: false,
  isThin: false,
  tag: 'p',
}

export default Copy

