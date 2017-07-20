// @flow
import React from 'react'
import Markdown from 'react-markdown'
import css, { media2, select } from '../styles/css'

type Props = {
  hasAltHeading?: boolean,
  hasLeadText?: boolean,
  source: string,
}

const iconPath = '/static/icons/services'

css.fontFace({
  fontFamily: 'RNSCamelia-Bold',
  fontStyle: 'normal',
  fontWeight: 400,
  src: 'url("/static/fonts/RNSCamelia-Bold.otf") format("opentype")',
})

css.fontFace({
  fontFamily: 'Helvetica-Md',
  fontStyle: 'normal',
  fontWeight: 400,
  src: 'url("/static/fonts/HelveticaNeueLTStd-Md.otf") format("opentype")',
})

css.fontFace({
  fontFamily: 'Helvetica-Th',
  fontStyle: 'normal',
  fontWeight: 400,
  src: 'url("/static/fonts/HelveticaNeueLTStd-Th.otf") format("opentype")',
})

const brandIcon = {
  backgroundImage: `url(${iconPath}/brand-design-white.svg)`,
}

const experienceIcon = {
  backgroundImage: `url(${iconPath}/experience-design-white.svg)`,
}

const frontEndIcon = {
  width: 26,
  backgroundImage: `url(${iconPath}/front-end-white.svg)`,
}

const graphicIcon = {
  backgroundImage: `url(${iconPath}/graphic-design-white.svg)`,
}

const interfaceIcon = {
  backgroundImage: `url(${iconPath}/interface-design-white.svg)`,
}


// Markdown styles
const style = css(
  {
    fontFamily: 'Helvetica-Md, "Helvetica Neue", Helvetica, sans-serif',
    fontWeight: 300,
    color: '#808080',
  },
  select('& h1', {
    fontFamily: 'RNSCamelia-Bold',
    fontSize: 40,
    lineHeight: 1,
    marginBottom: 10,
    color: '#010101',
  }),
  select('& p', {
    margin: '1em 0',
    fontSize: 14,
    lineHeight: 1.3,
  }),
  select('& h2', {
    display: 'flex',
    alignItems: 'center',
    width: 220,
    height: 40,
    marginTop: 60,
    marginBottom: 10,
    paddingTop: 5,
    fontSize: 13,
    textTransform: 'uppercase',
    color: '#fff',
    backgroundColor: '#010101',
  }),
  select('& h2::before', {
    content: '""',
    width: 18,
    height: 18,
    marginTop: -5,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: 'transparent',
    backgroundPosition: '0 0',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: `url(${iconPath}/experience-design-white.svg)`,
  }),
  select('[data-service="brand-design"] h2::before', brandIcon),
  select('& #brand-design::before', brandIcon),
  select('[data-service="experience-design"] h2::before', experienceIcon),
  select('& #experience-design::before', experienceIcon),
  select('[data-service="front-end"] h2::before', frontEndIcon),
  select('& #front-end::before', frontEndIcon),
  select('[data-service="graphic-design"] h2::before', graphicIcon),
  select('& #graphic-design::before', graphicIcon),
  select('[data-service="interface-design"] h2::before', interfaceIcon),
  select('& #interface-design::before', interfaceIcon),
  select('& img', {
    maxWidth: '100%',
    height: 'auto',
    fontSize: 12,
    marginBottom: 15,
  }),
  media2(
    select('& h1', {
      fontSize: 80,
    }),
    select('& h2', {
      marginTop: 80,
    }),
  ),
)

const altHeadingStyle = media2(
  select('& h1', {
    fontSize: '74px !important',
  }),
)

const leadTextStyle = css(
  select('& h1 + p', {
    margin: 0,
    fontFamily: 'Helvetica-Th, "Helvetica Neue", Helvetica, sans-serif',
    fontSize: 18,
    fontWeight: 200,
  }),
  media2(
    select('& h1 + p', {
      fontSize: 20,
    }),
  ),
)

const flatten = (text, child) => (
  typeof child === 'string'
  ? text + child
  : React.Children.toArray(child.props.children).reduce(flatten, text)
)

// Adds id's to headings
const HeadingRenderer = (props: any) => {
  const children = React.Children.toArray(props.children)
  const text = children.reduce(flatten, '')
  const slug = text.toLowerCase().replace(/\W/g, '-')
  return React.createElement(`h${props.level}`, { id: slug }, props.children)
}

const classNames = (hasAltHeading, hasLeadText) => ([
  style,
  ...(hasAltHeading ? [altHeadingStyle] : []),
  ...(hasLeadText ? [leadTextStyle] : []),
].join(' '))


const Component = ({ hasAltHeading, hasLeadText, source, ...props }: Props) => (
  <Markdown
    className={classNames(hasAltHeading, hasLeadText)}
    source={source}
    renderers={{ Heading: HeadingRenderer }}
    {...props}
  />
)

Component.defaultProps = {
  hasAltHeading: false,
  hasLeadText: false,
}

export default Component

