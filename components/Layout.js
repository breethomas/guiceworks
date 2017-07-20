// @flow
/* eslint-disable no-underscore-dangle */
import React from 'react'
import Head from 'next/head'
import { rehydrate } from 'glamor'
import AppView from '../components/AppView'
import FeatureDetection from '../components/FeatureDetection'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import View from '../components/View'

// Adds server generated styles to glamor cache.
// Has to run before any calls to glamor (load Layout first)
if (typeof window !== 'undefined') {
  if (window.__NEXT_DATA__ && window.__NEXT_DATA__.ids) {
    rehydrate(window.__NEXT_DATA__.ids)
  }
}

type Props = {
  children?: React.Element<*>,
  hasNavbar?: boolean,
  hasFooter?: boolean,
  pathname: string,
  query?: {
    id: string,
  },
  title?: string,
}

const title = 'Guiceworks'
const url = 'https://guice.works/'
const favicon = '/static/favicon.png'
const description = 'Guiceworks Design: UX, UI, Graphic, Interaction, & Concept'

const Layout = (props: Props) => (
  <View>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{props.title || title}</title>
      <meta name="referrer" content="always" />
      <meta name="application-name" content={props.title || title} />
      <meta name="subject" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Guiceworks" />
      <meta property="og:image" content={favicon} />
      <meta property="og:description" content={description} />
      <meta name="twitter:site" content="@guiceworks" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="name" itemProp="name" content={props.title || title} />
      <meta name="url" itemProp="url" content={url} />
      <meta name="image" itemProp="image" content={favicon} />
      <meta name="description" itemProp="description" content={description} />
      <link href="/static/favicon.ico" rel="shortcut icon" type="image/x-icon" />
      <link href="/static/favicon.svg" color="#000" rel="mask-icon" />
    </Head>
    <FeatureDetection />
    <AppView>
      { props.hasNavbar && <Navbar pathname={props.pathname} id={props.query && props.query.id} /> }
      <main role="main">
        {props.children}
      </main>
      { props.hasFooter && <Footer /> }
    </AppView>
  </View>
)

Layout.defaultProps = {
  children: null,
  hasNavbar: true,
  hasFooter: true,
  query: null,
  title: 'Yo.',
}

export default Layout
