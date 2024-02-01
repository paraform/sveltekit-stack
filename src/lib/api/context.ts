import type { db } from '@/db/db.server';

export type Variables = {
	database: typeof db;
};
