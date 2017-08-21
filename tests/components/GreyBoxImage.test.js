import React from 'react'
import renderer from 'react-test-renderer'
import GreyBoxImage from '../../components/GreyBoxImage'

describe('GreyBoxImage', () => {
  let component

  beforeEach(() => {
    component = <GreyBoxImage src="AM_grey-box.jpg" />
  })

  it('shows the correct snapshot for the GreyBoxImage component tree', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
