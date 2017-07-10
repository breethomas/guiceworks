import React from 'react'
// import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import App from '../../pages/index'

describe('/', () => {
  let app
  // let text

  // const getTitleText = () => (
  //   shallow(app)
  //   .children()
  //   .find('Markdown')
  //   .children()
  //   .text()
  // )

  beforeEach(() => {
    app = (
      <App
        url={{ pathname: '/' }}
        body="# Header"
        cards={[]}
        title="Title"
      />
    )
    // text = getTitleText()
  })

  it('samples a text node from the DOM', () => {
    // expect(shallow(app)).isEmpty()
    // expect(text).toEqual('Blast off.')
  })

  it('shows the correct snapshot', () => {
    const component = renderer.create(app)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

