// @flow
import React from 'react'
import { css } from '../styles/jss'
import Base from './Base'

const baseStyle = css({
  width: '100%',
  maxWidth: 1400,
  marginRight: 'auto',
  marginLeft: 'auto',
})

type Props = {}

export default (props: Props) => (
  <Base className={baseStyle} tagName="section" {...props} />
)

