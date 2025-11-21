import { z } from 'zod';
import { existUser } from '../services/user.service.js';
import { existComment } from '../services/comment.service.js';

export const createFavoriteCommentSchema = z.object({
    id_usuario: z
    .coerce
    .number('El usuario es obligatorio')
    .int("El usuario no tiene el formato valido"),
    id_comentario: z
    .coerce
    .number('El comentario es obligatoriao')
    .int('El comentario no tiene un formato valido')
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

    const commentExist = await existComment(data.id_comentario);
    console.log("commentExist", commentExist);
    if(!commentExist){
        ctx.addIssue({
            code: "custom",
            message: "El comentario no existe",
            path: ["id_comentario"]
        });
    }
})