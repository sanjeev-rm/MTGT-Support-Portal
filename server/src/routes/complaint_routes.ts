// complaint_routes.ts
import Router from 'koa-router';
import { AppDataSource } from '../data-source';
import { Complaint } from '../entity/Complaint';
import { Context } from 'koa';

const router = new Router({ prefix: '/api' });

interface ComplaintRequest {
  user_code: number;
  store_code: string;
  type: 'EFOS' | 'Coverage';
  reason: string;
  date: Date;
}

router.post('/complaints', async (ctx: Context) => {
  const body = ctx.request.body as ComplaintRequest;
  const { user_code, store_code, type, reason, date } = body;

  if (!user_code || !store_code || !type || !reason || !date) {
    ctx.status = 400;
    ctx.body = { error: 'Missing required fields' };
    return;
  }

  const repo = AppDataSource.getRepository(Complaint);
  const complaints = await repo.find({
    where: { user_code, store_code }
  });

  const hasSameDayComplaint = complaints.some(c => {
    const existingDate = new Date(c.date).toDateString();
    const newDate = new Date(date).toDateString();
    return existingDate === newDate;
  });

  if (hasSameDayComplaint) {
    ctx.status = 409;
    ctx.body = { error: 'Complaint already exists for this store on the same day' };
    return;
  }

  const complaint = repo.create({ user_code, store_code, type, reason, date });
  await repo.save(complaint);

  ctx.status = 201;
  ctx.body = { message: 'Complaint submitted successfully' };
});

export default router;
