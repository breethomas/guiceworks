// @flow
import React from 'react'
import Markdown from 'react-markdown'
import Article from '../components/Article'
import Copy from '../components/Copy'
import PageSection from '../components/PageSection'
import ImageIcon from '../components/ImageIcon'
import Title from '../components/Title'
import type { ServiceProps } from '../types/app.js.flow'

const path = '/static/icons/services'

type Props = {
  service: ServiceProps
}

export default (props: Props) => (
  <PageSection>
    <Article>
      <ImageIcon
        alt={props.service.title}
        src={[path, props.service.icon].join('/')}
        width={70}
        height={70}
      />
      <Title>{props.service.title}</Title>
      <Copy>{props.service.icon}</Copy>
      <Markdown source={props.service.body} />
    </Article>
  </PageSection>
)

