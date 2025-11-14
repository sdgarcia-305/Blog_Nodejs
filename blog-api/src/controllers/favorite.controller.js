import * as Favorite from '../models/favorite.model.js';

export const getFavorites = async(req, res) => {
    try {
        const dataFavorites = await Favorite.getAllFavorites()
        res
        .status(200)
        .json({ 
            message: "Favoritos obtenidos con exito",
            data: dataFavorites
        });
    } catch (error) {
        res
        .status(500)
        .json({
            message: "Error al obtener los favoritos",
            error: error
        });
    }
}

export const getFavorite = async(req, res) => {
    try {
        const favorite = await Favorite.getFavoriteById(req.params.id);
        if(!favorite) res.status(404).json({
            message: "Favorito no encontrado"
        });
        res.status(200).json({
            message: "Favorito encontrado exitosamente",
            data: favorite
        })
    } catch (error) {
        res
        .status(500)
        .json({ 
            message: "Error al obtener el favorito",
            error: error
        });
    }
}

export const addFavorite = async(req, res) => {
    try {
        const favorite = await Favorite.createFavorite(req.body);
        res.status(201).json({
            message: "Favorito creado con exito",
            data: favorite
        })
    } catch (error) {
        res
        .status(500)
        .json({ 
            message: "Error al crear el favorito",
            error: error
        });
    }
}

export const editFavorite = async(req, res) => {
    try {
        const favorite = await Favorite.updateFavorite(req.params.id, req.body);
        res.status(200).json({
            message: "Favorito actualizado con exito",
            data: favorite
        });
    } catch (error) {
        res
        .status(500)
        .json({ 
            message: "Error al actualizar el favorito",
            error: error
        });
    }
}

export const removeFavorite = async (req, res) => {
    try {
        await Favorite.deleteFavorite(req.params.id);
        res
        .status(200)
        .json({
            message: "Favorito eliminado con exito"
        });
    } catch (error) {
        res
        .status(500)
        .json({ 
            message: "Error al eliminar el favorito",
            error: error
        });
    }
}