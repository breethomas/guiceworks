// @flow
import React from 'react'
import css, { media2 } from '../styles/css'
import { maxWidthContainer } from '../styles/jso'
import Icon from './Icons'
import NavbarLink from './NavbarLink'
import NavbarLogo from './NavbarLogo'
import View from '../components/View'

const navStyle = css(
  {
    position: 'sticky',
    top: 0,
    display: 'flex',
    alignItems: 'center',
    minHeight: 140,
    color: '#010101',
    backgroundColor: '#fff',
  },
  media2({
    minHeight: 160,
  }),
)

const containmentStyle = css(
  maxWidthContainer,
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
)

const links = [
  { icon: 'ExperienceIcon', label: 'Experience Design', href: '/experience-design' },
  { icon: 'InterfaceIcon', label: 'Interface Design', href: '/interface-design' },
  { icon: 'BrandIcon', label: 'Brand Design', href: '/brand-design' },
  { icon: 'GraphicDesignIcon', label: 'Graphic Design', href: '/graphic-design' },
  { icon: 'FrontEndIcon', label: 'Front-end Engineering', href: '/front-end-engineering' },
]

type Props = {
  pathname: string,
}

export default (props: Props) => (
  <nav className={navStyle}>
    <View className={containmentStyle} >
      <NavbarLogo
        href="/"
        isActive={props.pathname === '/'}
      />
      {links.map(link => (
        <NavbarLink
          href={link.href}
          isActive={props.pathname === link.href}
          key={`NBL${link.label}`}
          title={link.label}
        >
          <Icon kind={link.icon} />
        </NavbarLink>
      ))}
    </View>
  </nav>
)
