// @flow
import React from 'react'
import css from '../styles/css'
import { maxWidthContainer } from '../styles/jso'

const style = css(maxWidthContainer)

export default (props: any) => (
  <section className={style} {...props} />
)

