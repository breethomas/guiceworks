// @flow
import React from 'react'
import css, { media } from '../styles/css'
import { easeInOutCubic, animateRotate } from '../styles/jso'
import Link from './Link'
import { GuiceworksIcon } from './Icons'
import withRouterProgress from './withRouterProgress'

type Props = {
  href: string,
  isActive: boolean,
  isRequesting: boolean,
}

const style = css(
  {
    display: 'flex',
    alignItems: 'center',
    marginRight: 'auto',
    width: 40,
    height: 40,
  },
  media('(min-width: 23em)', {
    width: 75,
    height: 75,
  }),
)

const activeStyle = css(
  { ...style },
  { pointerEvents: 'none' },
)

const requestStyle = css({
  animation: `${animateRotate} 1.03333s infinite ${easeInOutCubic}`,
})

const classNames = (isActive, isRequesting) => ([
  ...(isActive ? [activeStyle] : [style]),
  ...(isRequesting ? [requestStyle] : []),
].join(' '))

const NavbarLogo = ({ isActive, isRequesting, ...props }: Props) => (
  <Link
    className={classNames(isActive, isRequesting)}
    title="Guiceworks"
    {...props}
  >
    <GuiceworksIcon size={75} />
  </Link>
)

export default withRouterProgress(NavbarLogo)
