// @flow
import React from 'react'
import { css } from '../styles/jss'
import Base from './Base'

const style = css({
  fontSize: '1rem',
})

type Props = {
  tagName?: string,
}

const Title = ({ tagName, ...props }: Props) => (
  <Base className={style} tagName={tagName} {...props} />
)

Title.defaultProps = {
  tagName: 'h1',
}

export default Title

