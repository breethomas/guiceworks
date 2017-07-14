// @flow
import React from 'react'
import withFadeIn from './withFadeIn'

type Props = {
  isHidden: boolean,
}

const Article = ({ isHidden, ...props }: Props) => (
  <article {...props} />
)

export default withFadeIn(Article)

