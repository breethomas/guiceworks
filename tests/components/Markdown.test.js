import React from 'react'
import renderer from 'react-test-renderer'
import Markdown from '../../components/Markdown'

describe('Markdown', () => {
  it('shows the correct snapshot for the Markdown component tree', () => {
    const component = <Markdown source="Hello _world_." />
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot for the Markdown component tree (hasAltHeading)', () => {
    const component = <Markdown hasAltHeading source="Hello _world_." />
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot for the Markdown component tree (hasDoubleLeadText)', () => {
    const component = <Markdown hasDoubleLeadText source="Hello _world_." />
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
