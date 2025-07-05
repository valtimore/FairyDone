import {z} from 'zod';
import { email } from 'zod/v4';

export const registerSchema = z.object({
    username: z.string({
        required_error: 'Debes ingresar un usuario',
    }),
    email: z.string({
        required_error: 'Debes ingresar un correo',
    }).email({
        message: 'Formato de correo inválido',}),
    password: z.string({
        required_error: 'Debes ingresar una contraseña',
    }).min(6, {
        message: 'La contraseña debe tener al menos 6 caracteres',
    }),
})

export const longinSchema = z.object({
    email: z.string({
        required_error: 'Debes ingresar un correo',
    }).email({
        message: 'Formato de correo inválido',
    }),
    password: z.string({
        required_error: 'Debes ingresar una contraseña',
    }).min(6, {
        message: 'La contraseña debe tener al menos 6 caracteres',
    }),
})