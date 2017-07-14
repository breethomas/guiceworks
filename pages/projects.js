// @flow
import 'isomorphic-fetch'
import React from 'react'
import { createSelector } from 'reselect'
import { TITLE_PREFIX } from '../constants/en'
import { projectsPath } from '../networking/api'
import Layout from '../components/Layout'
import CardCollection from '../components/CardCollection'
import GreyBoxImage from '../components/GreyBoxImage'
import ProjectCard from '../components/ProjectCard'
import ProjectDetail from '../components/ProjectDetail'
import type { PageProjectProps } from '../types/app.js.flow'

const selectId = props => props && props.id
const selectProjects = (props, json) => json.projects

const selectProject = createSelector(
  [selectId, selectProjects], (id, projects) => (
    projects.find(project => project.id === id)
  ),
)

const selectIs404 = createSelector(
  [selectId, selectProject], (id, project) => (
    !!(id && !project)
  ),
)

const selectPageTitle = createSelector(
  [selectIs404, selectProject], (is404, project) => {
    if (is404) {
      return `${TITLE_PREFIX} | Not Found`
    } else if (project) {
      return `${TITLE_PREFIX} | ${project.title}`
    }
    return `${TITLE_PREFIX} | Projects`
  },
)

export default class extends React.PureComponent {
  props: PageProjectProps
  static async getInitialProps({ query }) {
    const res = await fetch(projectsPath())
    const json = await res.json()
    const is404 = selectIs404(query, json)
    const project = selectProject(query, json)
    return {
      is404,
      pageTitle: selectPageTitle(query, json),
      ...({ project } || {}),
      ...(!project ? json : {}),
    }
  }

  render() {
    const { is404, pageTitle, project, projects, url } = this.props
    return (
      <Layout pathname={url.pathname} title={pageTitle}>
        { is404 &&
          <div>404</div>
        }
        { project &&
          <ProjectDetail project={project} />
        }
        { project && project.greybox &&
          <GreyBoxImage src={project.greybox} />
        }
        { projects && !is404 &&
          <CardCollection>
            {projects.map(proj => (
              <ProjectCard project={proj} />
            ))}
          </CardCollection>
        }
      </Layout>
    )
  }
}

