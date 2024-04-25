import { Hono } from 'hono';
import { serveStatic } from 'hono/cloudflare-workers'
// @ts-expect-error this works in wrangler
import manifest from '__STATIC_CONTENT_MANIFEST'
const server = new Hono();

server.get('/*', serveStatic({ root: './', manifest }))

server.get('/api/upload', (c) => {
    c.text("TODO")
})

server.get('/api/fetch', (c) => {
    c.text("TODO")
})

server.get('/api/download', (c) => {
    c.text("TODO")
})

export default server;