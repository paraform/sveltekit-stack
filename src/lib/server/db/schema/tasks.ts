import { serial, text } from 'drizzle-orm/pg-core';
import { pgTable } from './_table';

export const tasks = pgTable('tasks', {
	id: serial('id').primaryKey(),
	name: text('name').notNull()
});
