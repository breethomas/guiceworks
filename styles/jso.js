// @flow
import css from '../styles/css'

export const easeInOutCubic = 'cubic-bezier(0.645, 0.045, 0.355, 1)'

export const animateRotate = css.keyframes('animateRotate', {
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(720deg)' },
})

export const maxWidthContainer = {
  width: '100%',
  maxWidth: 1800,
  marginRight: 'auto',
  marginLeft: 'auto',
  paddingLeft: 20,
  paddingRight: 20,
}

export const maxWidthContent = {
  width: '100%',
  maxWidth: 1210,
  marginRight: 'auto',
  marginLeft: 'auto',
  paddingLeft: 20,
  paddingRight: 20,
}
