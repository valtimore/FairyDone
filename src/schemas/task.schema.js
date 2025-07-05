import {z} from 'zod';
import { date } from 'zod/v4';

export const createTaskSchema = z.object({
    title: z.string({
        required_error: 'Title is required',
    }).min(1, {
        message: 'Title must be at least 1 character long',
    }),
    description: z.string({
        required_error: 'Description debe ser un string',
    }),
    date: z.string().datetime().optional(),
})