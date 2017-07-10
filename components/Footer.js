// @flow
import React from 'react'
import css, { media2 } from '../styles/css'
import { maxWidthContent } from '../styles/jso'
import Copy from './Copy'
import Title from './Title'
import View from './View'

const currentYear = new Date().getFullYear()

const footerStyle = css(
  {
    display: 'flex',
    flexFlow: 'column wrap',
    marginTop: 'auto',
    backgroundColor: '#fff',
    minHeight: 340,
  },
  media2({
    minHeight: 540,
  }),
)

const contactStyle = css({
  display: 'flex',
  flexFlow: 'column wrap',
  justifyContent: 'center',
  flex: 1,
  width: '100%',
})

const contentInfoStyle = css({
  display: 'flex',
  flexFlow: 'column wrap',
  justifyContent: 'center',
  width: '100%',
  minHeight: 85,
  marginTop: 'auto',
  color: '#fff',
  backgroundColor: '#010101',
})

const innerStyle = css(
  maxWidthContent,
)

const offColorStyle = css({
  color: '#808080',
})

const mailStyle = css({
  color: '#010101',
  borderBottom: '1px solid #4d4d4d',
  textDecoration: 'none',
})

const MailLink = () => (
  <strong>
    <a className={mailStyle} href="mailto:info@guiceworks.com">
      info@guiceworks.com
    </a>
  </strong>
)

export default () => (
  <footer className={footerStyle}>
    <View className={contactStyle}>
      <View className={innerStyle}>
        <Title tag="h2">Contact.</Title>
        <View className={offColorStyle}>
          <Copy isThin >
            For more information or work samples email us at <MailLink />
          </Copy>
        </View>
      </View>
    </View>
    <View className={contentInfoStyle} role="contentinfo">
      <View className={innerStyle}>
        <Copy isSmall isThin >
          <span>&copy;</span>
          <span>{` Copyright ${currentYear} Guiceworks INC All rights reserved.`}</span>
        </Copy>
      </View>
    </View>
  </footer>
)

