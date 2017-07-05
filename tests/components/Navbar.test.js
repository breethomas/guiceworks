import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import Navbar from '../../components/Navbar'

describe('Navbar', () => {
  let nav

  beforeEach(() => {
    nav = <Navbar pathname="/" />
  })

  it('sets up the correct navigation', () => {
    expect(shallow(nav).find('a').at(0).text()).toEqual('<GuiceworksIcon />')
    expect(shallow(nav).find('a').at(1).text()).toEqual('Experience Design')
  })

  it('sets the correct active state (Home)', () => {
    const active = shallow(nav).find('a').at(0).props().className
    const inactive = shallow(nav).find('a').at(1).props().className
    const inactive2 = shallow(nav).find('a').at(1).props().className
    expect(active).not.toEqual(inactive)
    expect(inactive).toEqual(inactive2)
  })

  it('shows the correct snapshot', () => {
    const component = renderer.create(nav)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

