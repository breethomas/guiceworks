// @flow
import React from 'react'
import css from '../styles/css'

const style = css({
  fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
  fontWeight: 200,
})

type Props = {
  className?: string,
  tag?: string,
}

const SansThin = ({ className, tag, ...props }: Props) => {
  const Component = tag || 'span'
  return (
    <Component className={`${style} ${className || ''}`} {...props} />
  )
}

SansThin.defaultProps = {
  className: '',
  tag: 'span',
}

export default SansThin

