// @flow
import React from 'react'

type Props = {
  alt: string,
}

export default (props: Props) => (
  <img
    alt={props.alt}
    width={32}
    height={32}
    {...props}
  />
)
