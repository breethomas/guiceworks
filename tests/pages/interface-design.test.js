import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import App from '../../pages/interface-design'

describe('/interface-design', () => {
  let app
  let text

  const getTitleText = () => (
    shallow(app)
    .children()
    .find('Title')
    .children()
    .text()
  )

  beforeEach(() => {
    app = (<App url={{ pathname: '/interface-design' }} />)
    text = getTitleText()
  })

  it('samples a text node from the DOM', () => {
    expect(text).toEqual('Interface Design')
  })

  it('shows the correct snapshot', () => {
    const component = renderer.create(app)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

