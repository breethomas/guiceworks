import React from 'react'
import renderer from 'react-test-renderer'
import CardCollection from '../../components/CardCollection'

describe('CardCollection', () => {
  let component

  beforeEach(() => {
    component = (
      <CardCollection>
        <span>CardCollection</span>
      </CardCollection>
    )
  })

  it('shows the correct snapshot for the CardCollection component tree', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
