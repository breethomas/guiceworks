// @flow
import React from 'react'
import css, { hover, media2, media3, media4 } from '../styles/css'
import Icon from './Icons'
import Link from './Link'
import type { ServiceProps } from '../types/app.js.flow'

type Props = {
  service: ServiceProps,
}

const style = css(
  {
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vw',
    maxHeight: 350,
    textDecoration: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    transition: 'background-color 0.4s',
  },
  hover({ backgroundColor: 'rgba(0, 0, 0, 0.1)' }),
  media2({ width: '50%' }),
  media3({ width: '33.33333%' }),
  media4({ width: '25%' }),
)

const textStyle = css({
  marginTop: 40,
  fontSize: 14,
  textTransform: 'uppercase',
})

export default ({ service, ...props }: Props) => (
  <Link
    className={style}
    as={`/services/${service.id}`}
    href={`/services?id=${service.id}`}
    key={service.title}
    {...props}
  >
    <Icon kind={service.icon.replace('.svg', '')} size={48} />
    <span className={textStyle}>{service.title}</span>
  </Link>
)
