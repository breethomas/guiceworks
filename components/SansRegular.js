// @flow
import React from 'react'
import css from '../styles/css'

css.fontFace({
  fontFamily: 'Helvetica-Md',
  fontStyle: 'normal',
  fontWeight: 400,
  src: 'url("/static/fonts/HelveticaNeueLTStd-Md.otf") format("opentype")',
})

const style = css({
  fontFamily: 'Helvetica-Md, "Helvetica Neue", Helvetica, sans-serif',
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

