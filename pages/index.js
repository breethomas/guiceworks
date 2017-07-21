// @flow
import 'isomorphic-fetch'
import React from 'react'
import { createSelector } from 'reselect'
import { TITLE_PREFIX } from '../constants/en'
import { indexPath } from '../networking/api'
import css from '../styles/css'
import { maxWidthContent } from '../styles/jso'
import Article from '../components/Article'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Markdown from '../components/Markdown'
import CardCollection from '../components/CardCollection'
import ProjectCard from '../components/ProjectCard'
import ServiceCard from '../components/ServiceCard'
import View from '../components/View'
import type { PageIndexProps } from '../types/app.js.flow'

const selectBody = json => json.body || ''
const selectCards = json => json.cards || []
const selectTitle = json => json.title || 'Home'

const selectPageTitle = createSelector(
  [selectTitle], title => `${TITLE_PREFIX} | ${title}`,
)

const headerStyle = css({
  ...maxWidthContent,
  marginBottom: 60,
})

export default class extends React.PureComponent {
  props: PageIndexProps
  static async getInitialProps() {
    const res = await fetch(indexPath())
    const json = await res.json()
    return {
      body: selectBody(json),
      cards: selectCards(json),
      pageTitle: selectPageTitle(json),
    }
  }

  render() {
    const { body, cards, pageTitle, url } = this.props
    return (
      <Layout pathname={url.pathname} query={url.query} title={pageTitle}>
        <Article key={new Date()}>
          <Header className={headerStyle}>
            <View style={{ maxWidth: 850 }}>
              <Markdown
                hasAltHeading
                source={body}
              />
            </View>
          </Header>
          <CardCollection>
            {cards.map(card => (
              card.image ?
                <ProjectCard key={card.id} project={card} /> :
                <ServiceCard key={card.id} service={card} />
            ))}
          </CardCollection>
        </Article>
      </Layout>
    )
  }
}
