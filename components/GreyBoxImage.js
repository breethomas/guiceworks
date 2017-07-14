// @flow
import React from 'react'
import css, { media2 } from '../styles/css'
import View from './View'

type Props = {
  src: string,
}

const style = css(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
    backgroundColor: '#f2f2f2',
  },
  media2({
    paddingTop: 120,
    paddingBottom: 120,
  }),
)

const imgStyle = css({
  width: '100%',
  maxWidth: 1170,
  marginRight: 'auto',
  marginLeft: 'auto',
})

const namify = src => src.split('.')[0].replace(/_|-/, ' ')

export default ({ src }: Props) => (
  <View className={style}>
    <img
      className={imgStyle}
      alt={namify(src)}
      src={src}
    />
  </View>
)

