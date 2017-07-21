// @flow
import React from 'react'
import css, { media2 } from '../styles/css'
import Article from './Article'
import Header from './Header'
import Markdown from './Markdown'
import PageSection from './PageSection'
import ImageIcon from './ImageIcon'
import type { ServiceProps } from '../types/app.js.flow'

const path = '/static/icons/services'

type Props = {
  service: ServiceProps
}

const headerStyle = css(
  {
    marginBottom: 80,
  },
  media2({
    marginBottom: 120,
  }),
)

export default (props: Props) => (
  <PageSection>
    <Article key={new Date()}>
      <Header className={headerStyle}>
        <ImageIcon
          alt={props.service.title}
          src={[path, props.service.icon].join('/')}
          width={70}
          height={70}
        />
      </Header>
      <Markdown
        containerProps={{ 'data-service': props.service.icon.replace('.svg', '') }}
        source={props.service.body}
      />
    </Article>
  </PageSection>
)
