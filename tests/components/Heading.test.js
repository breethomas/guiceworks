import React from 'react'
import renderer from 'react-test-renderer'
import Heading from '../../components/Heading'

describe('Heading', () => {
  it('shows the correct snapshot for the Heading component tree (default)', () => {
    const component = <Heading>Heading</Heading>
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot for the Heading component tree (tag)', () => {
    const component = <Heading tag="span">Heading</Heading>
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
