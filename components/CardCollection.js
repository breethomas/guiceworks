// @flow
import React from 'react'
import css, { media2 } from '../styles/css'
import View from './View'

type Props = {
  children: React.Element<*>
}

const style = css(
  {
    display: 'flex',
    flexFlow: 'column wrap',
    maxWidth: 1400,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  media2({ flexFlow: 'row wrap' }),
)

export default ({ children, ...props }: Props) => (
  <View className={style} {...props} >
    { children }
  </View>
)
