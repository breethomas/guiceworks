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
  title?: string,
}

const Layout = (props: Props) => (
  <View>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      { props.title && <title>{props.title}</title> }
      <link href="/static/favicon.ico" rel="shortcut icon" type="image/x-icon" />
      <link href="/static/favicon.svg" color="#000" rel="mask-icon" />
    </Head>
    <FeatureDetection />
    <AppView>
      { props.hasNavbar && <Navbar pathname={props.pathname} /> }
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
  title: 'Yo.',
}

export default Layout

