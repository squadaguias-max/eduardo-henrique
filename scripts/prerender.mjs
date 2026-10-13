import { readFile, writeFile, rm } from 'node:fs/promises'
import { render } from '../.ssr/entry-server.js'

const path = new URL('../dist/index.html', import.meta.url)
const html = await readFile(path, 'utf8')
await writeFile(path, html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`))
await rm(new URL('../.ssr/', import.meta.url), { recursive: true, force: true })
