import Koa from 'koa';
import Router from 'koa-router';

const app = new Koa();
const router = new Router();

router.get('/api/hello', async (ctx) => {
    ctx.body = 'hello';
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
    console.log(`server is running on port 3000`);
});