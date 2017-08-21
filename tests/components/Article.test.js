import React from 'react'
import renderer from 'react-test-renderer'
import Article from '../../components/Article'

describe('Article', () => {
  let component

  beforeEach(() => {
    component = <Article />
  })

  it('shows the correct snapshot for the Article component tree', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
