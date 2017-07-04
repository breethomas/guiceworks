// @flow
import React, { PureComponent } from 'react'

type Props = {
  tagName: string,
}

export default class extends PureComponent {
  props: Props

  static defaultProps = {
    tagName: 'div',
  }

  render() {
    const { tagName, ...elementProps } = this.props
    const Component = tagName
    return (
      <Component {...elementProps} />
    )
  }
}

