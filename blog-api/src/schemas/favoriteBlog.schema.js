import { z } from 'zod';
import { existUser } from '../services/user.service.js';
import { existBlog } from '../services/blog.service.js';

export const createFavoriteBlogSchema = z.object({
    id_usuario: z
    .coerce
    .number('El usuario es obligatorio')
    .int("El usuario no tiene el formato valido"),
    id_blog: z
    .coerce
    .number('El blog es obligatoriao')
    .int('El blog no tiene un formato valido')
})
.superRefine( async(data, ctx) => {
    const userExist = await existUser(data.id_usuario);
    console.log("userExist", userExist);
    if(!userExist){
        ctx.addIssue({
            code: "custom",
            message: "El usuario no existe",
            path: ['id_usuario']
        });
    }

    const blogExist = await existBlog(data.id_blog);
    console.log("blogExist", blogExist);
    if(!blogExist){
        ctx.addIssue({
            code: "custom",
            message: "El blog no existe",
            path: ["id_blog"]
        });
    }
})