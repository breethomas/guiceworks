// @flow
import React from 'react'
import css, { media2, media3, media4 } from '../styles/css'
import Link from './Link'
import type { ProjectProps } from '../types/app.js.flow'

type Props = {
  project: ProjectProps,
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
    backroundRepeat: 'none',
    backgroundSize: 'cover',
  },
  media2({ width: '50%' }),
  media3({ width: '33.33333%' }),
  media4({ width: '25%' }),
)

const textStyle = css({
  marginTop: 40,
  opacity: 0,
  fontSize: 14,
  textTransform: 'uppercase',
})

export default ({ project, ...props }: Props) => (
  <Link
    className={style}
    as={`/projects/${project.id}`}
    href={`/projects?id=${project.id}`}
    key={project.title}
    style={{ backgroundImage: `url(${project.image})` }}
    {...props}
  >
    <span className={textStyle}>{project.title}</span>
  </Link>
)

