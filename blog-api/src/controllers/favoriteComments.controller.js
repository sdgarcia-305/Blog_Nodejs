import * as CommentsFavorite from '../models/favoriteComments.model.js';

export const getFavoritesComments = async(req, res) => {
    try {
        const dataCommentsFavorites = await CommentsFavorite.getAllFavoritesComments()
        res
        .status(200)
        .json({
            message: "Comentarios favoritos obtenidos con exito",
            data: dataCommentsFavorites
        });
    } catch (error) {
        res
        .status(500)
        .json({
            message: "Error al obtener los comentarios favoritos",
            error: error
        });
    }
}

export const getFavoriteComment = async(req, res) => {
    try {
        const commentFavorite = await CommentsFavorite.getFavoriteCommentById(req.params.id);
        if(!commentFavorite) res.status(404).json({
            message: "Comentario favorito no encontrado"
        });
        res.status(200).json({
            message: "Comentario favorito encontrado exitosamente",
            data: commentFavorite
        });
    } catch (error) {
        res
        .status(500)
        .json({ 
            message: "Error al obtener el comentario favorito",
            error: error
        });
    }
}

export const addFavoriteComment = async(req, res) => {
    try {
        const commentFavorite = await CommentsFavorite.createFavoriteComment(req.body);
        res.status(201).json({
            message: "Comentario agregado con exito a los favoritos",
            data: commentFavorite
        });
    } catch (error) {
        res
        .status(500)
        .json({ 
            message: "Error al agregar el comentario a favoritos",
            error: error
        });
    }
}

export const editFavoriteComment = async(req, res) => {
    try {
        const commentFavorite = await CommentsFavorite.updateFavoriteComment(req.params.id, req.body);
        res.status(200).json({
            message: "Comentario favorito actualizado con exito",
            data: commentFavorite
        })
    } catch (error) {
        res
        .status(500)
        .json({ 
            message: "Error al actualizar el comentario favorito",
            error: error
        });
    }
}

export const removeFavoriteComment = async(req, res) => {
    try {
        await CommentsFavorite.deleteFavoriteComment(req.params.id);
        res
        .status(200)
        .json({
            message: "Comentario eliminado con exito de favoritos"
        });
    } catch (error) {
        res
        .status(500)
        .json({ 
            message: "Error al eliminar el comentario de favoritos",
            error: error
        });
    }
}