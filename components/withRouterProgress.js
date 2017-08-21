// @flow
import React, { PureComponent } from 'react'
import Router from 'next/router'

type State = {
  isRequesting: boolean,
}

export default (ComposedComponent: any) => (
  class extends PureComponent {
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
      return (
        <ComposedComponent
          {...this.props}
          {...this.state}
        />
      )
    }
  }
)
