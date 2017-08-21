import React from 'react'
import renderer from 'react-test-renderer'
import Page from '../../pages/projects'

describe('/projects', () => {
  let project
  let projects

  beforeEach(() => {
    project = {
      body: 'Project 1 _body_',
      icon: 'icon.svg',
      id: 'project-1',
      image: '/static/images/project-1_image.jpg',
      greybox: '/static/images/project-1_grey-box.jpg',
      next: 'next-project',
      prev: 'prev-project',
      title: 'Project 1 title',
    }
    projects = [1, 2, 3].map(num => (
      {
        body: `Project ${num} _body_`,
        icon: `icon-${num}.svg`,
        id: `project-${num}`,
        image: `/static/images/project-${num}_image.jpg`,
        greybox: `/static/images/project-${num}_grey-box.jpg`,
        next: `next-project-${num + 1}`,
        prev: `prev-project-${num - 1}`,
        title: `Project ${num} title`,
      }
    ))
  })

  it('shows the correct snapshot for the projects page tree (404)', () => {
    const component = (
      <Page
        is404
        pageTitle="404 Page Title"
        url={{ pathname: '/projects' }}
      />
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot for the projects page tree (Overview)', () => {
    const component = (
      <Page
        pageTitle="Projects Page Title"
        projects={projects}
        url={{ pathname: '/projects' }}
      />
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the correct snapshot for the projects page tree (Detail)', () => {
    const component = (
      <Page
        pageTitle="Project Page Title"
        project={project}
        url={{ pathname: '/projects/project-1' }}
      />
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
