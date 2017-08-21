// @flow
// flowlint-next-line sketchy-null:off
const domain = process.env.DOMAIN || `http://localhost:${process.env.PORT || 3000}`

const getAPIPath = (path: string) => (
  `${domain}/static/api/${path.replace(/^\//, '')}.json`
)

export const indexPath = () => getAPIPath('index')
export const projectsPath = () => getAPIPath('projects')
export const servicesPath = () => getAPIPath('services')
