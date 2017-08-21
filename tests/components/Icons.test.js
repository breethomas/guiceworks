import React from 'react'
import renderer from 'react-test-renderer'
import Icon from '../../components/Icons'

describe('Icons', () => {
  it('shows the correct snapshot for the ArrowIcon component tree', () => {
    const tree = renderer.create(<Icon kind="ArrowIcon" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot for the BrandIcon component tree', () => {
    const tree = renderer.create(<Icon kind="BrandIcon" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot for the brand-design component tree', () => {
    const tree = renderer.create(<Icon kind="brand-design" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot for the ExperienceIcon component tree', () => {
    const tree = renderer.create(<Icon kind="ExperienceIcon" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot for the experience-design component tree', () => {
    const tree = renderer.create(<Icon kind="experience-design" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot for the FrontEndIcon component tree', () => {
    const tree = renderer.create(<Icon kind="FrontEndIcon" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot for the front-end component tree', () => {
    const tree = renderer.create(<Icon kind="front-end" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot for the GraphicDesignIcon component tree', () => {
    const tree = renderer.create(<Icon kind="GraphicDesignIcon" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot for the graphic-design component tree', () => {
    const tree = renderer.create(<Icon kind="graphic-design" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot for the InterfaceIcon component tree', () => {
    const tree = renderer.create(<Icon kind="InterfaceIcon" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot for the interface-design component tree', () => {
    const tree = renderer.create(<Icon kind="interface-design" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot for the GuiceworksIcon component tree', () => {
    const tree = renderer.create(<Icon kind="GuiceworksIcon" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
