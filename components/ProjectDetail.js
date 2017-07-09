// @flow
import React from 'react'
import Markdown from 'react-markdown'
import Article from '../components/Article'
import Link from '../components/Link'
import PageSection from '../components/PageSection'
import Title from '../components/Title'
import type { ProjectProps } from '../types/app.js.flow'

type Props = {
  project: ProjectProps,
}

export default (props: Props) => (
  <PageSection>
    <Article>
      <Title>{props.project.title}</Title>
      <Link
        as={`/projects/${props.project.prev}`}
        href={`/projects?id=${props.project.prev}`}
      >
        { props.project.prev }
      </Link>
      <span> :: </span>
      <Link
        as={`/projects/${props.project.next}`}
        href={`/projects?id=${props.project.next}`}
      >
        { props.project.next }
      </Link>
      <Markdown source={props.project.body} />
    </Article>
  </PageSection>
)

