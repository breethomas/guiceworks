// @flow
import React from 'react'
import css from '../styles/css'

const style = css({
  fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
  fontWeight: 400,
})

type Props = {
  className?: string,
  tag?: string,
}

const SansRegular = ({ className, tag, ...props }: Props) => {
  const Component = tag || 'span'
  return (
    <Component className={`${style} ${className || ''}`} {...props} />
  )
}

SansRegular.defaultProps = {
  className: '',
  tag: 'span',
}

export default SansRegular

