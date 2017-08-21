import React from 'react'
import renderer from 'react-test-renderer'
import Svg from '../../components/Svg'

describe('Svg', () => {
  it('shows the correct snapshot for the Svg component tree (width/height)', () => {
    const component = (
      <Svg width={32} height={32} viewBox="0 0 32 32">
        <g fill="currentColor">
          <polygon points="15.9 0 13.725 2.163 26.11 14.472 0 14.472 0 17.529 26.11 17.529 13.725 29.839 15.9 32 32 16" />
        </g>
      </Svg>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot for the Svg component tree (size)', () => {
    const component = (
      <Svg size={32} viewBox="0 0 32 32">
        <g fill="currentColor">
          <polygon points="15.9 0 13.725 2.163 26.11 14.472 0 14.472 0 17.529 26.11 17.529 13.725 29.839 15.9 32 32 16" />
        </g>
      </Svg>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
