import React from 'react'
import renderer from 'react-test-renderer'
import Page from '../../pages/index'

describe('/', () => {
  let cards
  let component

  beforeEach(() => {
    cards = [1, 2, 3].map(num => (
      {
        icon: `icon-${num}.svg`,
        id: `card-${num}`,
        image: `/static/images/card-${num}.jpg`,
        title: `Card ${num} title`,
      }
    ))

    component = (
      <Page
        body="This is the _page_ body"
        cards={cards}
        pageTitle="Page Title"
        url={{ pathname: '/' }}
      />
    )
  })

  it('shows the correct snapshot for the index page tree', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
