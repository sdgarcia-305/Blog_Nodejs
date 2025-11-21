import * as BlogsFavorite from '../models/favoriteBlogs.model.js';

export const getFavoritesBlogs = async(req, res) => {
    try {
        const dataBlogsFavorites = await BlogsFavorite.getAllFavoritesBlogs()
        res
        .status(200)
        .json({ 
            message: "Blogs favoritos obtenidos con exito",
            data: dataBlogsFavorites
        });
    } catch (error) {
        res
        .status(500)
        .json({
            message: "Error al obtener los blogs favoritos",
            error: error
        });
    }
}

export const getFavoriteBlog = async(req, res) => {
    try {
        const blogFavorite = await BlogsFavorite.getFavoriteBlogById(req.params.id);
        if(!blogFavorite) res.status(404).json({
            message: "Blog favorito no encontrado"
        });
        res.status(200).json({
            message: "Blog favorito encontrado exitosamente",
            data: blogFavorite
        });
    } catch (error) {
        res
        .status(500)
        .json({ 
            message: "Error al obtener el blog favorito",
            error: error
        });
    }
}

export const addFavoriteBlog = async(req, res) => {
    try {
        const blogFavorite = await BlogsFavorite.createFavoriteBlog(req.body);
        res.status(201).json({
            message: "Blog agregado con exito a los favoritos",
            data: blogFavorite
        });
    } catch (error) {
        res
        .status(500)
        .json({ 
            message: "Error al agregar el blog a favoritos",
            error: error
        });
    }
}

export const editFavoriteBlog = async(req, res) => {
    try {
        const blogFavorite = await BlogsFavorite.updateFavoriteBlog(req.params.id, req.body);
        res.status(200).json({
            message: "Blog favorito actualizado con exito",
            data: blogFavorite
        });
    } catch (error) {
        res
        .status(500)
        .json({ 
            message: "Error al actualizar el blog favorito",
            error: error
        });
    }
}

export const removeFavoriteBlog = async (req, res) => {
    try {
        await BlogsFavorite.deleteFavoriteBlog(req.params.id);
        res
        .status(200)
        .json({
            message: "Blog eliminado con exito de favoritos"
        });
    } catch (error) {
        res
        .status(500)
        .json({ 
            message: "Error al eliminar el blog de favoritos",
            error: error
        });
    }
}