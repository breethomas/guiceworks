import React from 'react'
import renderer from 'react-test-renderer'
import Paddles from '../../components/Paddles'

const noop = () => {}

describe('Paddles', () => {
  let component

  beforeEach(() => {
    component = (
      <Paddles
        dir="projects"
        nextLink={noop}
        prevLink={noop}
      />
    )
  })

  it('shows the correct snapshot for the Paddles component tree', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
