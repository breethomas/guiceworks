import * as api from '../../networking/api'

describe('api', () => {
  it('gets the index path', () => {
    expect(api.indexPath()).toEqual('http://localhost:3000/static/api/index.json')
  })

  it('gets the projects path', () => {
    expect(api.projectsPath()).toEqual('http://localhost:3000/static/api/projects.json')
  })

  it('gets the services path', () => {
    expect(api.servicesPath()).toEqual('http://localhost:3000/static/api/services.json')
  })
})
