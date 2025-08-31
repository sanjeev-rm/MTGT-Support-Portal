import Router from 'koa-router';
import { AppDataSource } from '../data-source';
import { User } from '../entity/User';
import { StoreAccess } from '../entity/StoreAccess';

const router = new Router({
  prefix: '/api'
});

console.log('Setting up user routes...');

router.get('/users', async (ctx) => {
  console.log('Hit /api/users route');
  ctx.body = "hello user";
});

router.get('/users/:userCode', async (ctx) => {
  console.log('Hit /api/users/:userCode route');
  const userCode = Number(ctx.params.userCode);
  const userRepo = AppDataSource.getRepository(User);
  const user = await userRepo.findOneBy({ user_code: userCode });

  if (!user) {
    ctx.status = 404;
    ctx.body = { error: 'User not found' };
    return;
  }

  ctx.body = { user_code: user.user_code, channel: user.channel };
});

router.get('/users/:userCode/stores', async (ctx) => {
  console.log('Hit /api/users/:userCode/stores route');
  const userCode = Number(ctx.params.userCode);
  const accessRepo = AppDataSource.getRepository(StoreAccess);

  const accesses = await accessRepo.find({ where: { user_code: userCode } });

  ctx.body = accesses; 
});

console.log('User routes configured');
export default router;