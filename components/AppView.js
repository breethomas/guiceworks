// @flow
import React from 'react'
import css from '../styles/css'
import View from './View'

const style = css({
  display: 'flex',
  flexFlow: 'column wrap',
  minHeight: '100vh',
})

export default (props: any) => (
  <View className={style} {...props} />
)

