import React from 'react'
import renderer from 'react-test-renderer'
import ProjectCard from '../../components/ProjectCard'

describe('ProjectCard', () => {
  let component

  beforeEach(() => {
    const project = {
      body: 'Project 1 _body_',
      icon: 'icon.svg',
      id: 'project-1',
      image: '/static/images/image_home.jpg',
      greybox: '/static/images/image_grey-box.jpg',
      next: 'next-project',
      prev: 'prev-project',
      title: 'Project 1 title',
    }

    component = (
      <ProjectCard
        project={project}
      />
    )
  })

  it('shows the correct snapshot for the ProjectCard component tree', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
