import * as Comment from '../models/comment.model.js';

export const getComments = async(req, res) => {
    const comments = await Comment.getAllComments();
}

export const getComment = async(req, res) => {
    const comment = await Comment.getCommentById(req.params.id);
    if ( !comment ) return res.status(404).json({error: "Comentario no encontrado"});
    res.json(comment);
}

export const addComment = async(req, res) => {
    const comment = await Comment.createComment(req.body);
    res.status(201).json(comment);
}

export const editComment = async(req, res) => {
    const comment = await Comment.updateComment(req.params.id, req.body);
    res.json({ message: "Comentario ha sido actualizado", data: comment });
}

export const removeComment = async(req, res) => {
    await Comment.deleteComment(req.params.id);
    res.json({message: "Comentario eliminado"});
}