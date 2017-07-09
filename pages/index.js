// @flow
import React from 'react'
import { TITLE_PREFIX } from '../constants/en'
import Layout from '../components/Layout'
import PageSection from '../components/PageSection'
import Heading from '../components/Heading'
import Link from '../components/Link'
import type { PageProps } from '../types/app.js.flow'

export default (props: PageProps) => (
  <Layout pathname={props.url.pathname} title={`${TITLE_PREFIX} | Home`}>
    <PageSection>
      <Heading tag="h1">A fight to rid the world of poor design.</Heading>
      <div>
        <Link href="/projects">Projects</Link>
      </div>
      <div>
        <Link href="/services">Services</Link>
      </div>
    </PageSection>
  </Layout>
)

