import Koa from 'koa';
import Router from 'koa-router';
import serve from 'koa-static';

const app = new Koa();
const router = new Router();

const staticPath = './vue3-jsweb/dist';
app.use(serve(staticPath));

router.get('/api/hello', async (ctx) => {
    ctx.body = 'hello';
});

app.use(router.routes());
app.use(router.allowedMethods());

const port = 3001;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});