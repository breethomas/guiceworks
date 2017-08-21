import React from 'react'
import renderer from 'react-test-renderer'
import PageSection from '../../components/PageSection'

describe('PageSection', () => {
  let component

  beforeEach(() => {
    component = (
      <PageSection>
        PageSection
      </PageSection>
    )
  })

  it('shows the correct snapshot for the PageSection component tree', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
