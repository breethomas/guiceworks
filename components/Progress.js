// @flow
import React, { PureComponent } from 'react'
import Router from 'next/router'
import { css } from '../styles/jss'

const easeInOutCubic = 'cubic-bezier(0.645, 0.045, 0.355, 1)'

const animateRotate = css.keyframes('animateRotate', {
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(720deg)' },
})

const wrapperStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  top: 4,
  left: 12,
  zIndex: 3,
  width: 48,
  height: 48,
  borderRadius: '50%',
  backgroundImage: 'radial-gradient(circle, #f6f6f6 25%, rgba(255,255,255,0) 100%)',
})

const busyStyle = css({
  width: 24,
  height: 24,
  borderRadius: '50%',
  borderWidth: 2,
  borderStyle: 'dashed',
  borderColor: '#c80000',
  animation: `${animateRotate} 1.03333s infinite ${easeInOutCubic}`,
})

type State = {
  isRequesting: boolean,
}

export default class extends PureComponent {
  state: State = { isRequesting: false }

  componentWillMount() {
    Router.onRouteChangeStart = () => this.setState({ isRequesting: true })
    Router.onRouteChangeComplete = () => this.setState({ isRequesting: false })
    Router.onRouteChangeError = () => this.setState({ isRequesting: false })
  }

  componentWillUnmount() {
    Router.onRouteChangeStart = null
    Router.onRouteChangeComplete = null
    Router.onRouteChangeError = null
  }

  render() {
    return this.state.isRequesting ? (
      <div className={wrapperStyle}>
        <div className={busyStyle} />
      </div>
    ) : null
  }
}

