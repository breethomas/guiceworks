// @flow
import React from 'react'
import css, { media2 } from '../styles/css'
import Header from './Header'
import Link from './Link'
import { ArrowIcon } from './Icons'

type Props = {
  dir: string,
  nextLink: string,
  prevLink: string,
}

const style = css(
  {
    color: '#010101',
    display: 'flex',
    flexFlow: 'row wrap',
    height: 32,
    marginBottom: 20,
  },
  media2({ marginBottom: 80 }),
)

const nextLinkStyle = css({
  marginLeft: 'auto',
})

export default ({ dir, nextLink, prevLink }: Props) => (
  <Header className={style} >
    <Link
      as={`/${dir}/${prevLink}`}
      href={`/${dir}?id=${prevLink}`}
      title={prevLink}
    >
      <ArrowIcon style={{ transform: 'rotate(180deg)' }} />
    </Link>
    <Link
      as={`/${dir}/${nextLink}`}
      href={`/${dir}?id=${nextLink}`}
      className={nextLinkStyle}
      title={nextLink}
    >
      <ArrowIcon />
    </Link>
  </Header>
)

