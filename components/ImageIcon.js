// @flow
import React from 'react'
import css from '../styles/css'

const style = css({
  maxWidth: '100%',
  height: 'auto',
})

type Props = {
  alt: string,
}

export default (props: Props) => (
  <img
    alt={props.alt}
    className={style}
    width={32}
    height={32}
    {...props}
  />
)

