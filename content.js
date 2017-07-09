const fs = require('fs')
const path = require('path')
const frontMatter = require('front-matter')

const deserialize = parsed => (
  Object.assign({}, parsed.attributes, { body: parsed.body })
)

const contentDir = path.join(__dirname, 'content')
const subdirs = fs.readdirSync(contentDir).filter(file => (
  fs.statSync(path.join(contentDir, file)).isDirectory()),
)

subdirs.map((subdirname) => {
  const subdir = path.join(__dirname, 'content', subdirname)
  const filenames = fs.readdirSync(subdir)
  const node = filenames.map((filename) => {
    if (path.extname(filename) !== '.md') { return null }
    const id = path.basename(filename, '.md')
    const markdown = fs.readFileSync(path.join(subdir, filename), 'utf-8')
    const parsed = deserialize(frontMatter(markdown))
    const additions = { id }
    const props = Object.assign(parsed, additions)
    return props
  }).filter(value => value !== null)
  const obj = { [subdirname]: node }
  const output = JSON.stringify(obj)
  fs.writeFileSync(`./static/api/${subdirname}.json`, output)
  return obj
})

