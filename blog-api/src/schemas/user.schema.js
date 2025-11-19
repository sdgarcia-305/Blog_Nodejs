import { z } from 'zood';
import { existUser } from '../services/user.service';

export const createUserSchema = z.object({
    nombre: z
    .string('El nombre es obligatorio')
    .min(5, 'El nombre debe tener almenos 5 caracteres')
})