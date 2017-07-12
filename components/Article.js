// @flow
import React from 'react'
import withFadeIn from './withFadeIn'

const Article = (props: any) => (
  <article {...props} />
)

export default withFadeIn(Article)

