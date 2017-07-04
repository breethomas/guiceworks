// @flow
/* eslint-disable no-underscore-dangle */
import React from 'react'
import Head from 'next/head'
import { rehydrate } from 'glamor'
import Navbar from '../components/Navbar'
import Progress from '../components/Progress'

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
  pathname: string,
  title?: string,
}

const Layout = (props: Props) => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      { props.title && <title>{props.title}</title> }
      <link href="/static/favicon.ico" rel="shortcut icon" type="image/x-icon" />
      <link href="/static/favicon.svg" color="#000" rel="mask-icon" />
    </Head>
    { props.hasNavbar && <Navbar pathname={props.pathname} /> }
    <main>
      {props.children}
    </main>
    <Progress />
  </div>
)

Layout.defaultProps = {
  children: null,
  hasNavbar: true,
  title: 'Yo.',
}

export default Layout

