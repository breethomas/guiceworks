// @flow
import React from 'react'
import Link from 'next/link'
import { css } from '../styles/jss'
import { RocketIcon } from './Icons'

const navStyle = css({
  position: 'sticky',
  top: 0,
  display: 'flex',
  alignItems: 'center',
  height: 160,
  backgroundColor: '#f6f6f6',
})

const containmentStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  width: '100%',
  maxWidth: 1400,
  marginRight: 'auto',
  marginLeft: 'auto',
})

const linkStyle = css({
  display: 'flex',
  alignItems: 'center',
  height: 36,
  marginRight: 14,
  fontSize: 14,
})

const activeLinkStyle = css(
  { ...linkStyle },
  { color: '#c80000' },
)

const pushLeftStyle = css({
  marginRight: 'auto',
})

const links = [
  { label: 'Experience Design', href: '/experience-design' },
  { label: 'Interface Design', href: '/interface-design' },
  { label: 'Brand Design', href: '/brand-design' },
  { label: 'Graphic Design', href: '/graphic-design' },
  { label: 'Front-end Engineering', href: '/front-end-engineering' },
]

const isTestEnv = process.env.NODE_ENV !== 'test'

type Props = {
  pathname: string,
}

export default (props: Props) => (
  <nav className={navStyle}>
    <div className={containmentStyle} >
      <Link href="/" prefetch={isTestEnv} >
        <a className={`${props.pathname === '/' ? activeLinkStyle : linkStyle} ${pushLeftStyle}`} >
          <RocketIcon />
        </a>
      </Link>
      {links.map(link => (
        // TODO: Have to toggle the prefetch because of: https://github.com/zeit/next.js/issues/1204
        <Link href={link.href} key={`NBL${link.label}`} prefetch={isTestEnv} >
          <a className={props.pathname === link.href ? activeLinkStyle : linkStyle}>{link.label}</a>
        </Link>
      ))}
    </div>
  </nav>
)

