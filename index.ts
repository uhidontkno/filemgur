import { Hono } from 'hono';
import { serveStatic } from 'hono/cloudflare-workers'
const server = new Hono();

server.get('/*', serveStatic({"root":"static/","manifest": {}}));

export default server;