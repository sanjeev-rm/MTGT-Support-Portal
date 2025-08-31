import Koa from 'koa';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import userRoutes from './routes/user_routes';
import complaintRoutes from './routes/complaint_routes';
import { AppDataSource } from './data-source';

const app = new Koa();

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');

    app.use(cors({ origin: '*', credentials: true }));
    app.use(bodyParser());

    app.use(async (ctx, next) => {
      console.log(`REQUEST RECEIVED: ${ctx.method} ${ctx.path}`);
      await next();
      console.log(`SENDING RESPONSE: ${ctx.status}`);
    });

    app.use(async (ctx, next) => {
      if (ctx.path === '/') {
        ctx.body = { message: 'Home works!', path: ctx.path };
      } else if (ctx.path === '/test') {
        ctx.body = { message: 'Test works!', path: ctx.path };
      } else {
        await next();
      }
    });

    console.log('Registering user routes...');
    app.use(userRoutes.routes());
    app.use(userRoutes.allowedMethods());
    app.use(complaintRoutes.routes());
    app.use(complaintRoutes.allowedMethods());

    app.use(async (ctx) => {
      ctx.status = 404;
      ctx.body = { error: 'Route not found', path: ctx.path };
    });

    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

export default app;
