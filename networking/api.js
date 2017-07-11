// @flow
const domain = process.env.DOMAIN || `http://localhost:${process.env.PORT || 3000}`


const getAPIPath = (path: string) => (
  `${domain}/static/api/${path.replace(/^\//, '')}.json`
)

export const projectsPath = () => getAPIPath('projects')
export const servicesPath = () => getAPIPath('services')
export const indexPath = () => getAPIPath('index')

