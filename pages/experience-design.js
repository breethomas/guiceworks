// @flow
import React from 'react'
import { TITLE_PREFIX } from '../constants/en'
import Layout from '../components/Layout'
import PageSection from '../components/PageSection'
import Title from '../components/Title'
import type { PageProps } from '../types/app.js.flow'

export default (props: PageProps) => (
  <Layout pathname={props.url.pathname} title={`${TITLE_PREFIX} | Experience Design`}>
    <PageSection>
      <Title>Experience Design</Title>
    </PageSection>
  </Layout>
)
