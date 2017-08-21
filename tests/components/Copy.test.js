import React from 'react'
import renderer from 'react-test-renderer'
import Copy from '../../components/Copy'

describe('Copy', () => {
  it('shows the correct snapshot for the Copy component tree (default)', () => {
    const component = <Copy>Copy</Copy>
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot for the Copy component tree (isSmall)', () => {
    const component = <Copy isSmall>Copy</Copy>
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot for the Copy component tree (isThin)', () => {
    const component = <Copy isThin>Copy</Copy>
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot for the Copy component tree (tag)', () => {
    const component = <Copy tag="span">Copy</Copy>
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
