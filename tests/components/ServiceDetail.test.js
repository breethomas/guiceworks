import React from 'react'
import renderer from 'react-test-renderer'
import ServiceDetail from '../../components/ServiceDetail'

describe('ServiceDetail', () => {
  let component

  beforeEach(() => {
    const service = {
      body: 'Service 1 _body_',
      icon: 'icon.svg',
      id: 'service-1',
      title: 'Service 1 title',
    }

    component = (
      <ServiceDetail
        service={service}
      />
    )
  })

  it('shows the correct snapshot for the ServiceDetail component tree', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
