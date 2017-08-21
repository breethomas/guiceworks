// @flow
import React from 'react'

type SvgProps = {
  children?: React.Element<*>,
  width?: number,
  height?: number,
  size?: number,
}

const Svg = ({ children, size, width, height, ...props }: SvgProps) => (
  <svg
    aria-hidden
    height={size != null ? size : height}
    width={size != null ? size : width}
    {...props}
  >
    {children}
  </svg>
)

Svg.defaultProps = {
  children: null,
  width: 32,
  height: 32,
  size: null,
}

export default Svg
