const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
// const route = pathMatch()
// const matchProjects = route('/projects/:id')
// const matchServices = route('/services/:id')

// const customRoute = (pathname) => {
//   const serviceParams = matchServices(pathname)
//   if (serviceParams) {
//     return { params: serviceParams, path: '/services' }
//   }
//   const projectParams = matchProjects(pathname)
//   if (projectParams) {
//     return { params: projectParams, path: '/projects' }
//   }
//   return { params: null, route: null }
// }

app.prepare()
.then(() => {
  const server = express()
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({ extended: true }))

  server.get('/projects/:id', (req, res) => {
    console.log('projects', req.query, req.url)
    return app.render(req, res, '/projects', req.query)
  })

  server.get('/services/:id', (req, res) => {
    console.log('services', req.query, req.url)
    return app.render(req, res, '/services', req.query)
  })

  server.get('*', (req, res) => (
    handle(req, res)
  ))

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> RU Ready on http://localhost:${port}`) // eslint-disable-line
  })
})

