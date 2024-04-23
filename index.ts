import { Hono } from 'hono';
import { serveStatic } from 'hono/cloudflare-workers'
// @ts-expect-error this works in wrangler
import manifest from '__STATIC_CONTENT_MANIFEST'
const server = new Hono();

server.get('/*', serveStatic({ root: './', manifest }))

export default server;