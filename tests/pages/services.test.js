import React from 'react'
import renderer from 'react-test-renderer'
import Page from '../../pages/services'

describe('/services', () => {
  let service
  let services

  beforeEach(() => {
    service = {
      body: 'Service 1 _body_',
      icon: 'icon.svg',
      id: 'service-1',
      title: 'Service 1 title',
    }
    services = [1, 2, 3].map(num => (
      {
        body: `Service ${num} _body_`,
        icon: `icon-${num}.svg`,
        id: `service-${num}`,
        title: `Service ${num} title`,
      }
    ))
  })

  it('shows the correct snapshot for the services page tree (404)', () => {
    const component = (
      <Page
        is404
        pageTitle="404 Page Title"
        url={{ pathname: '/services' }}
      />
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot for the services page tree (Overview)', () => {
    const component = (
      <Page
        pageTitle="Services Page Title"
        services={services}
        url={{ pathname: '/services' }}
      />
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot for the services page tree (Detail)', () => {
    const component = (
      <Page
        pageTitle="Service Page Title"
        service={service}
        url={{ pathname: '/services/service-1' }}
      />
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
