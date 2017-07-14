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
    zIndex: 1000,
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
  { icon: 'ExperienceIcon', label: 'Experience Design', href: '/services?id=experience-design' },
  { icon: 'InterfaceIcon', label: 'Interface Design', href: '/services?id=interface-design' },
  { icon: 'BrandIcon', label: 'Brand Design', href: '/services?id=brand-design' },
  { icon: 'GraphicDesignIcon', label: 'Graphic Design', href: '/services?id=graphic-design' },
  { icon: 'FrontEndIcon', label: 'Front-end Engineering', href: '/services?id=front-end-engineering' },
]

type Props = {
  pathname: string,
  id?: string,
}

const Navbar = (props: Props) => {
  const activePath = props.id ? `${props.pathname}?id=${props.id}` : props.pathname
  return (
    <nav className={navStyle}>
      <View className={containmentStyle} >
        <NavbarLogo
          href="/"
          isActive={activePath === '/'}
        />
        {links.map(link => (
          <NavbarLink
            href={link.href}
            isActive={activePath === link.href}
            key={`NBL${link.label}`}
            title={link.label}
          >
            <Icon kind={link.icon} />
          </NavbarLink>
        ))}
      </View>
    </nav>
  )
}

Navbar.defaultProps = {
  id: null,
}

export default Navbar

