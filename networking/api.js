// @flow
const domain = process.env.DOMAIN || ''

const getAPIPath = (path: string) => (
  `${domain}/static/api/${path.replace(/^\//, '')}.json`
)

export const projectsPath = () => getAPIPath('projects')
export const servicesPath = () => getAPIPath('services')
export const indexPath = () => getAPIPath('index')

