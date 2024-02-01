import { client } from '@/api/client';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const api = client(fetch);
	const tasks = await api.tasks.$get();

	if (!tasks.ok) {
		return { tasks: [] };
	}

	return {
		tasks: await tasks.json()
	};
}) satisfies PageLoad;
