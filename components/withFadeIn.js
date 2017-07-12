// @flow
import React, { PureComponent } from 'react'
import css from '../styles/css'

type State = {
  isHidden: boolean,
}

const style = css({ transition: 'opacity 0.8s' })
const hiddenStyle = css({ opacity: 0 })

const classNames = isHidden => ([
  ...[style],
  ...(isHidden ? [hiddenStyle] : []),
].join(' '))

export default (ComposedComponent: any) => (
  class extends PureComponent {
    state: State = { isHidden: true }

    componentDidMount() {
      this.fadeUp()
    }

    fadeUp() {
      requestAnimationFrame(() => {
        this.setState({ isHidden: false })
      })
    }

    render() {
      return (
        <ComposedComponent
          className={classNames(this.state.isHidden)}
          {...this.props}
          {...this.state}
        />
      )
    }
  }
)

