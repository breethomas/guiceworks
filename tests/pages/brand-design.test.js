import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import App from '../../pages/brand-design'

describe('/brand-design', () => {
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
    app = (<App url={{ pathname: '/brand-design' }} />)
    text = getTitleText()
  })

  it('samples a text node from the DOM', () => {
    expect(text).toEqual('Brand Design')
  })

  it('shows the correct snapshot', () => {
    const component = renderer.create(app)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

