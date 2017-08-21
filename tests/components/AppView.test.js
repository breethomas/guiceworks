import React from 'react'
import renderer from 'react-test-renderer'
import AppView from '../../components/AppView'

describe('AppView', () => {
  let component

  beforeEach(() => {
    component = <AppView />
  })

  it('shows the correct snapshot for the AppView component tree', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
