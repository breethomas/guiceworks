import React from 'react'
import renderer from 'react-test-renderer'
import Header from '../../components/Header'

describe('Header', () => {
  let component

  beforeEach(() => {
    component = <Header />
  })

  it('shows the correct snapshot for the Header component tree', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
