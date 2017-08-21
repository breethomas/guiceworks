import React from 'react'
import renderer from 'react-test-renderer'
import ServiceCard from '../../components/ServiceCard'

describe('ServiceCard', () => {
  let component

  beforeEach(() => {
    const service = {
      body: 'Service 1 _body_',
      icon: 'icon.svg',
      id: 'service-1',
      title: 'Service 1 title',
    }

    component = (
      <ServiceCard
        service={service}
      />
    )
  })

  it('shows the correct snapshot for the ServiceCard component tree', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
