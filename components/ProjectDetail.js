// @flow
import React from 'react'
import css from '../styles/css'
import Article from './Article'
import Header from './Header'
import ImageIcon from './ImageIcon'
import Markdown from './Markdown'
import Paddles from './Paddles'
import PageSection from './PageSection'
import type { ProjectProps } from '../types/app.js.flow'

const path = '/static/icons/projects'

type Props = {
  project: ProjectProps,
}

const headerStyle = css({
  marginBottom: 10,
})

export default (props: Props) => (
  <PageSection>
    <Paddles
      dir="projects"
      nextLink={props.project.next}
      prevLink={props.project.prev}
    />
    <Article key={new Date()}>
      <Header className={headerStyle}>
        <ImageIcon
          alt={props.project.title}
          src={[path, props.project.icon].join('/')}
          width={250}
          height={90}
        />
      </Header>
      <Markdown
        hasAltHeading
        hasDoubleLeadText
        source={props.project.body}
      />
    </Article>
  </PageSection>
)
