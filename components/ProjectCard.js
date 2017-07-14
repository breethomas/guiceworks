// @flow
import React from 'react'
import css, { before, hover, media2, media3, media4 } from '../styles/css'
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
    position: 'relative',
    width: '100%',
    height: '100vw',
    maxHeight: 350,
    textDecoration: 'none',
    backroundRepeat: 'none',
    backgroundSize: 'cover',
  },
  before({
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    transition: 'background-color 0.4s',
  }),
  hover(before({
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  })),
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

