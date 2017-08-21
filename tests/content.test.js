const fs = require('fs')
const path = require('path')

const outputDir = path.resolve('.', 'static', 'api')

const getJson = filename => (
  JSON.parse(fs.readFileSync(path.join(outputDir, `${filename}.json`), 'utf-8'))
)

describe('content.js', () => {
  it('is valid json for index.json', () => {
    expect(() => {
      getJson('index')
    }).not.toThrow()
  })

  it('outputs an index.json with the expected keys', () => {
    const json = getJson('index')
    const expected = ['title', 'cards', 'body']
    const result = Object.keys(json)
    expect(expected).toEqual(result)
  })

  it('is valid json for projects.json', () => {
    expect(() => {
      getJson('projects')
    }).not.toThrow()
  })

  it('outputs an projects.json with the expected keys', () => {
    const json = getJson('projects')
    const expected = ['projects']
    const result = Object.keys(json)
    expect(expected).toEqual(result)
    expect(result.length).toBeTruthy()
  })

  it('is valid json for services.json', () => {
    expect(() => {
      getJson('services')
    }).not.toThrow()
  })

  it('outputs an services.json with the expected keys', () => {
    const json = getJson('services')
    const expected = ['services']
    const result = Object.keys(json)
    expect(expected).toEqual(result)
    expect(result.length).toBeTruthy()
  })
})
