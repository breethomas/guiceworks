import React from 'react'
import renderer from 'react-test-renderer'
import SansRegular from '../../components/SansRegular'

describe('SansRegular', () => {
  let component

  beforeEach(() => {
    component = (
      <SansRegular className="SansRegularClassName" tag="p">
        SansRegular
      </SansRegular>
    )
  })

  it('shows the correct snapshot for the SansRegular component tree', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
