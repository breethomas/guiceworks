// @flow
import React from 'react'
import css from '../styles/css'

css.fontFace({
  fontFamily: 'RNSCamelia-Bold',
  fontStyle: 'normal',
  fontWeight: 400,
  src: 'url("/static/fonts/RNSCamelia-Bold.otf") format("opentype")',
})

const style = css({
  fontFamily: 'RNSCamelia-Bold',
})

type Props = {
  className?: string,
  tag?: string,
}

const SerifBold = ({ className, tag, ...props }: Props) => {
  const Component = tag != null ? tag : 'span'
  return (
    <Component className={`${style} ${className || ''}`} {...props} />
  )
}

SerifBold.defaultProps = {
  className: '',
  tag: 'span',
}

export default SerifBold
