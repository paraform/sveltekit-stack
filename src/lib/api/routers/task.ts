import { Hono } from 'hono';
import type { TaskType } from '@/db/types';
import type { Variables } from '../context';

export const taskRouter = new Hono<{ Variables: Variables }>().get('/', async (c) => {
	try {
		const tasks = await c.get('database').query.tasks.findMany();
		return c.json<TaskType[]>(tasks);
	} catch {
		(err: Error) => c.json({ error: err }, 400);
	}
});
