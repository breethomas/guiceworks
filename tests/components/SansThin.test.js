import React from 'react'
import renderer from 'react-test-renderer'
import SansThin from '../../components/SansThin'

describe('SansThin', () => {
  let component

  beforeEach(() => {
    component = (
      <SansThin className="SansThinClassName" tag="p">
        SansThin
      </SansThin>
    )
  })

  it('shows the correct snapshot for the SansThin component tree', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
