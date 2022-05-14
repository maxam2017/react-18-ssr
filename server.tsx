import Koa from 'koa';
import Router from 'koa-router';
import serve from 'koa-static';
import path from 'path';

import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import AppRoutes from './src/AppRoutes';

const app = new Koa();
app.use(serve(path.join(__dirname, '/public')));

if (process.env.NODE_ENV === 'development') {
  app.use(serve(path.join(__dirname, '/.parcel')));
}

const router = new Router();

const template = (html: string) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Web site created using create-react-app" />
    <link rel="apple-touch-icon" href="/logo192.png" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="stylesheet" href="/app.css" />
    <title>React App</title>
  </head>
  <body>
    <div id='root'>
      ${html}
    </div>
    <script src="./index.js"></script>
  </body>
</html>
`;

router.get('(.*)', async (ctx) => {
  ctx.body = template(
    ReactDOMServer.renderToString(
      <StaticRouter location={ctx.url}>
        <AppRoutes />
      </StaticRouter>,
    ),
  );
});

app.use(router.routes());
app.listen(3000);
