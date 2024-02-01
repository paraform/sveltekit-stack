import { Hono } from 'hono';
import { db } from '@/db/db.server';
import { taskRouter } from './routers/task';
import type { Variables } from './context';

const app = new Hono<{ Variables: Variables }>().use('*', async (c, next) => {
	c.set('database', db);
	await next();
});

export const router = app.basePath('/api').route('/tasks', taskRouter);

export default app;

export type Router = typeof router;
