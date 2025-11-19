import { z } from 'zod';
import { existUser } from '../services/user.service.js';
import { existCategory } from '../services/category.service.js';
import { existSubcategory } from '../services/subcategory.service.js';

export const createBlogSchema = z.object({
    titulo: z
    .string('El título es obligatorio')
    .min(3, 'El título debe tener almenos 3 caracteres'),
    contenido: z
    .string('El contenido es obligatorio')
    .min(150, 'El contenido debe tener almenos 150 caracteres'),
    id_usuario: z
    .coerce
    .number('El usuario es obligatorio')
    .int("El usuario no tiene el formato valido"),
    id_categoria: z
    .number('La categoria es obligatoriao')
    .int('La categoria no tiene un formato valido'),
    id_subcategoria: z
    .number('La subcategoria es obligatoriao')
    .int('La subcategoria no tiene un formato valido'),
})
.superRefine( async(data, ctx) => {
    const userExist = await existUser(data.id_usuario);
    if(!userExist){
        ctx.addIssue({
            code: "custom",
            message: "El usuario no existe",
            path: ['id_usuario']
        });
    }

    const categoryExist = await existCategory(data.id_categoria);
    if(!categoryExist){
        ctx.addIssue({
            code: "custom",
            message: "La categoría no existe",
            path: ["id_categoria"]
        });
    }

    const subcategoryExist = await existSubcategory(data.id_subcategoria);
    if(!subcategoryExist){
        ctx.addIssue({
            code: "custom",
            message: "La subcategoria no existe",
            path: ["id_subcategoria"]
        });
    }
});