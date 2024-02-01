import { db } from '@/server/db/db.server';
import { tasks } from '../lib/server/db/schema';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const allTasks = await db.select().from(tasks);
	return {
		allTasks
	};
}) satisfies PageServerLoad;
