import { tasks } from './schema/tasks';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

export type TaskType = typeof tasks.$inferSelect;
export type TaskInsertType = typeof tasks.$inferInsert;
export const selectTaskSchema = createSelectSchema(tasks);
export const insertTaskSchema = createInsertSchema(tasks);
