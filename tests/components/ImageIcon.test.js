import React from 'react'
import renderer from 'react-test-renderer'
import ImageIcon from '../../components/ImageIcon'

describe('ImageIcon', () => {
  let component

  beforeEach(() => {
    component = <ImageIcon alt="alt text" />
  })

  it('shows the correct snapshot for the ImageIcon component tree', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
