// @flow
import React from 'react'
import { TITLE_PREFIX } from '../constants/en'
import Layout from '../components/Layout'
import PageSection from '../components/PageSection'
import Heading from '../components/Heading'
import type { PageProps } from '../types/app.js.flow'

export default (props: PageProps) => (
  <Layout pathname={props.url.pathname} title={`${TITLE_PREFIX} | Home`}>
    <PageSection>
      <Heading tag="h1">A fight to rid the world of poor design.</Heading>
    </PageSection>
  </Layout>
)

