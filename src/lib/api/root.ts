import { Hono } from 'hono';
import type { TaskType } from '../db/types';
import { db } from '@/db/db.server';

type Variables = {
	database: typeof db;
};

export const router = new Hono<{ Variables: Variables }>().get('/tasks', async (c) => {
	try {
		const tasks = await c.get('database').query.tasks.findMany();
		return c.json<TaskType[]>(tasks);
	} catch {
		(err: Error) => c.json({ error: err }, 400);
	}
});

export const api = new Hono<{ Variables: Variables }>()
	.use('*', async (c, next) => {
		c.set('database', db);
		await next();
	})
	.route('/api', router);

export type Router = typeof router;
