const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const pathMatch = require('path-match')

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const app = next({ dev })
const handle = app.getRequestHandler()
const route = pathMatch()
const matchProjects = route('/projects/:id')
const matchServices = route('/services/:id')

const customRoute = (pathname) => {
  const serviceParams = matchServices(pathname)
  if (serviceParams) {
    return { params: serviceParams, path: '/services' }
  }
  const projectParams = matchProjects(pathname)
  if (projectParams) {
    return { params: projectParams, path: '/projects' }
  }
  return { params: null, route: null }
}

app.prepare()
.then(() => {
  createServer((req, res) => {
    const { pathname, query } = parse(req.url, true)
    const props = customRoute(pathname)
    if (props.params) {
      app.render(req, res, props.path, Object.assign(props.params, query))
      return
    }
    handle(req, res)
  })
  .listen(3000, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`) // eslint-disable-line
  })
})

