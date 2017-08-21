import React from 'react'
import renderer from 'react-test-renderer'
import Navbar from '../../components/Navbar'

describe('Navbar', () => {
  let component

  beforeEach(() => {
    component = <Navbar pathname="/" />
  })

  it('shows the correct snapshot for the Navbar component tree', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
