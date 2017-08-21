// @flow
import React from 'react'
import css from '../styles/css'

css.fontFace({
  fontFamily: 'Helvetica-Th',
  fontStyle: 'normal',
  fontWeight: 400,
  src: 'url("/static/fonts/HelveticaNeueLTStd-Th.otf") format("opentype")',
})

const style = css({
  fontFamily: 'Helvetica-Th, "Helvetica Neue", Helvetica, sans-serif',
  fontWeight: 200,
})

type Props = {
  className?: string,
  tag?: string,
}

const SansThin = ({ className, tag, ...props }: Props) => {
  const Component = tag != null ? tag : 'span'
  return (
    <Component className={`${style} ${className || ''}`} {...props} />
  )
}

SansThin.defaultProps = {
  className: '',
  tag: 'span',
}

export default SansThin
