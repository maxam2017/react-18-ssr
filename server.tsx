import Koa from 'koa';
import Router from 'koa-router';
import serve from 'koa-static';
import path from 'path';

import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './src/App';
import Html from './src/components/Html';

const ABORT_DELAY = 10000;

const app = new Koa();
app.use(serve(path.join(__dirname, '/public')));
app.use(serve(path.join(__dirname, '/dist')));

const router = new Router();

async function render(ctx: Koa.Context) {
  let didError = false;

  /**
   * NOTE: use promise to force koa waiting for streaming.
   */
  return new Promise((_resolve, reject) => {
    const stream = ReactDOMServer.renderToPipeableStream(
      <StaticRouter location={ctx.url}>
        <Html title="React SSR Demo">
          <App />
        </Html>
      </StaticRouter>,
      {
        bootstrapScripts: ['/index.js'],
        onShellReady() {
          ctx.respond = false;
          ctx.res.statusCode = didError ? 500 : 200;
          ctx.response.set('content-type', 'text/html');

          stream.pipe(ctx.res);
        },
        onError() {
          didError = true;
          reject();
        },
      },
    );
    setTimeout(() => {
      stream.abort();
      reject();
    }, ABORT_DELAY);
  });
}

router.get('(.*)', async (ctx) => {
  await render(ctx);
});

app.use(router.routes());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Koa server is running at http://localhost:${port}`);
});
