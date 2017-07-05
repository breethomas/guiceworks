// @flow
import React from 'react'
import css, { after, hover } from '../styles/css'
import Link from './Link'

type Props = {
  children: React.Element<*>,
  href: string,
  isActive: boolean,
}

const style = css(
  {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    position: 'relative',
    marginLeft: 15,
    transition: 'color 0.2s',
  },
  after({
    content: '""',
    position: 'relative',
    top: 10,
    width: 0,
    height: '1px',
    borderBottom: '1px solid',
    transition: 'width 0.2s',
  }),
  hover(
    { color: '#ea007b' },
    after({ width: '100%' }),
  ),
)

const activeStyle = css(
  { ...style },
  { pointerEvents: 'none' },
  after({ width: '100%' }),
)

export default ({ href, isActive, ...props }: Props) => (
  <Link
    className={`${style} ${isActive ? activeStyle : ''}`}
    href={href}
    {...props}
  />
)
