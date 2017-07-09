// @flow
import 'isomorphic-fetch'
import React from 'react'
import { createSelector } from 'reselect'
import { TITLE_PREFIX } from '../constants/en'
import { servicesPath } from '../networking/api'
import Layout from '../components/Layout'
import Link from '../components/Link'
import ServiceDetail from '../components/ServiceDetail'
import type { PageServiceProps } from '../types/app.js.flow'

const selectId = props => props && props.id
const selectServices = (props, json) => json.services

const selectService = createSelector(
  [selectId, selectServices], (id, services) => (
    services.find(service => service.id === id)
  ),
)

const selectIs404 = createSelector(
  [selectId, selectService], (id, service) => (
    !!(id && !service)
  ),
)

const selectPageTitle = createSelector(
  [selectIs404, selectService], (is404, service) => {
    if (is404) {
      return `${TITLE_PREFIX} | Not Found`
    } else if (service) {
      return `${TITLE_PREFIX} | ${service.title}`
    }
    return `${TITLE_PREFIX} | Services`
  },
)

export default class extends React.PureComponent {
  props: PageServiceProps
  static async getInitialProps({ query }) {
    const res = await fetch(servicesPath())
    const json = await res.json()
    const is404 = selectIs404(query, json)
    const service = selectService(query, json)
    return {
      is404,
      pageTitle: selectPageTitle(query, json),
      ...({ service } || {}),
      ...(!service ? json : {}),
    }
  }

  render() {
    const { is404, pageTitle, service, services, url } = this.props
    return (
      <Layout pathname={url.pathname} title={pageTitle}>
        { is404 &&
          <div>404</div>
        }
        { service &&
          <ServiceDetail service={service} />
        }
        { services && !is404 &&
          <div style={{ display: 'flex', flexFlow: 'column wrap' }}>
            {services.map(serv => (
              <Link
                as={`/services/${serv.id}`}
                href={`/services?id=${serv.id}`}
                key={serv.title}
              >
                {serv.title}
              </Link>
            ))}
          </div>
        }
      </Layout>
    )
  }
}

