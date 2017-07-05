// @flow
import React from 'react'
import css from '../styles/css'

const family = css.fontFace({
  fontFamily: 'HelveticaNeueLTStd-Th',
  fontStyle: 'normal',
  fontWeight: 400,
  src: 'local("HelveticaNeueLTStd-Th"), url("/static/fonts/HelveticaNeueLTStd-Th.otf") format("opentype")',
})

const style = css({
  fontFamily: family,
})

type Props = {
  className?: string,
  tag?: string,
}

const SansSerif = ({ className, tag, ...props }: Props) => {
  const Component = tag || 'span'
  return (
    <Component className={`${style} ${className || ''}`} {...props} />
  )
}

SansSerif.defaultProps = {
  className: '',
  tag: 'span',
}

export default SansSerif

