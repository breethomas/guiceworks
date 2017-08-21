import React from 'react'
import renderer from 'react-test-renderer'
import Router from 'next/router'
import withRouterProgress from '../../components/withRouterProgress'
import View from '../../components/View'

const ComposedComponent = withRouterProgress(View)

describe('withRouterProgress', () => {
  let tree

  beforeEach(() => {
    tree = renderer.create(<ComposedComponent data-passed="pass" />)
  })

  it('shows the correct snapshot for the wrapped ComposedComponent tree through state changes (normal)', () => {
    expect(tree.toJSON()).toMatchSnapshot()
    Router.onRouteChangeStart()
    expect(tree.toJSON()).toMatchSnapshot()
    Router.onRouteChangeComplete()
    expect(tree.toJSON()).toMatchSnapshot()
  })

  it('shows the correct snapshot for the wrapped ComposedComponent tree through state changes (error)', () => {
    expect(tree.toJSON()).toMatchSnapshot()
    Router.onRouteChangeStart()
    expect(tree.toJSON()).toMatchSnapshot()
    Router.onRouteChangeError()
    expect(tree.toJSON()).toMatchSnapshot()
  })
})
