import React from 'react'
import renderer from 'react-test-renderer'
import Footer from '../../components/Footer'

describe('Footer', () => {
  let component

  beforeEach(() => {
    component = <Footer />
  })

  it('shows the correct snapshot for the Footer component tree', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
