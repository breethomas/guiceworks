// @flow
import React from 'react'
import Markdown from 'react-markdown'
import Article from '../components/Article'
import Copy from '../components/Copy'
import PageSection from '../components/PageSection'
import Title from '../components/Title'
import type { ServiceProps } from '../types/app.js.flow'

type Props = {
  service: ServiceProps
}

export default (props: Props) => (
  <PageSection>
    <Article>
      <Title>{props.service.title}</Title>
      <Copy>{props.service.icon}</Copy>
      <Markdown source={props.service.body} />
    </Article>
  </PageSection>
)

