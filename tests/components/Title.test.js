import React from 'react'
import renderer from 'react-test-renderer'
import Title from '../../components/Title'

describe('Title', () => {
  it('shows the correct snapshot for the Title component tree (default)', () => {
    const component = <Title>Title</Title>
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot for the Title component tree (tag)', () => {
    const component = <Title tag="span">Title</Title>
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
