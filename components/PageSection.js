// @flow
import React from 'react'
import css from '../styles/css'
import { maxWidthContent } from '../styles/jso'

const style = css(maxWidthContent)

export default (props: any) => (
  <section className={style} {...props} />
)
