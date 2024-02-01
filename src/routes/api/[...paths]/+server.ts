import { router } from '@/api/root';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = ({ request }) => router.fetch(request);
export const POST: RequestHandler = ({ request }) => router.fetch(request);
