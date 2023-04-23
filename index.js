import Koa from 'koa';
import Router from 'koa-router';
import serve from 'koa-static';
import fs from 'fs';
import https from 'https';
// import sslify, { xForwardedProtoResolver } from 'koa-sslify';

const app = new Koa();
const router = new Router();

// app.use(sslify.default({ resolver: xForwardedProtoResolver, customProtoHeader: 'X-Forwarded-Proto' }));

const staticPath = './vue3-jsweb/dist';
app.use(serve(staticPath));

router.get('/api/hello', async (ctx) => {
    ctx.body = 'hello';
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
    console.log(`server is running on port 3000`);
});

const sslOptions = {
    key: fs.readFileSync('./privkey.pem'),
    cert: fs.readFileSync('./fullchain.pem'),
};

https.createServer(sslOptions, app.callback()).listen(3001, () => {
    console.log('Koa.js app listening on port 3001 with SSL');
});