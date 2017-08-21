import React from 'react'
import renderer from 'react-test-renderer'
import SerifBold from '../../components/SerifBold'

describe('SerifBold', () => {
  let component

  beforeEach(() => {
    component = (
      <SerifBold className="SerifBoldClassName" tag="p">
        SerifBold
      </SerifBold>
    )
  })

  it('shows the correct snapshot for the SerifBold component tree', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
