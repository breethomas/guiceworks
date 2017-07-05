// @flow
import React from 'react'
import { TITLE_PREFIX } from '../constants/en'
import Layout from '../components/Layout'
import PageSection from '../components/PageSection'
import Title from '../components/Title'
import type { PageProps } from '../types/app.js.flow'
import Icon from '../components/Icons'

export default (props: PageProps) => (
  <Layout pathname={props.url.pathname} title={`${TITLE_PREFIX} | Style guide`}>
    <PageSection>
      <Title>Style guide</Title>
      <Icon kind="ArrowIcon" />
      <Icon kind="BrandIcon" />
      <Icon kind="ExperienceIcon" />
      <Icon kind="FrontEndIcon" />
      <Icon kind="GraphicDesignIcon" />
      <Icon kind="GuiceworksIcon" />
      <Icon kind="InterfaceIcon" />
    </PageSection>
  </Layout>
)

