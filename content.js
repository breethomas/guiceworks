const fs = require('fs')
const path = require('path')
const frontMatter = require('front-matter')

const flat = {}

const deserialize = parsed => (
  Object.assign({}, parsed.attributes, { body: parsed.body })
)

const contentDir = path.join(__dirname, 'content')
const subdirs = fs.readdirSync(contentDir).filter(file => (
  fs.statSync(path.join(contentDir, file)).isDirectory()),
)

// Save out subdirectories to json
subdirs.map((subdirname) => {
  const subdir = path.join(__dirname, 'content', subdirname)
  const filenames = fs.readdirSync(subdir)
  const node = filenames.map((filename) => {
    if (path.extname(filename) !== '.md') { return null }
    const id = path.basename(filename, '.md')
    const markdown = fs.readFileSync(path.join(subdir, filename), 'utf-8')
    const parsed = deserialize(frontMatter(markdown))
    const additions = { id }
    const props = Object.assign({}, parsed, additions)
    flat[props.id] = props
    return props
  }).filter(value => value !== null)
  const obj = { [subdirname]: node }
  const output = JSON.stringify(obj)
  console.log(`Writing ./static/api/${subdirname}.json`)
  fs.writeFileSync(`./static/api/${subdirname}.json`, output)
  return obj
})

// Save out the home page to json
const indexDeserialize = ({ id, icon, image, title }) => (
  { id, icon, image, title }
)

const indexMd = fs.readFileSync(path.join(contentDir, 'index.md'), 'utf-8')
const indexParsed = deserialize(frontMatter(indexMd))
const cardIds = indexParsed.cards.replace(/\s/g, '').split(',')
const cards = cardIds.map(id => (
  flat[id] ? indexDeserialize(flat[id]) : null
)).filter(value => value !== null)

const indexProps = Object.assign({}, indexParsed, { cards })
const indexOutput = JSON.stringify(indexProps)
fs.writeFileSync('./static/api/index.json', indexOutput)
console.log('Writing ./static/api/index.json')

