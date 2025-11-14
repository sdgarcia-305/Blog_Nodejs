import * as Blog from '../models/blog.model';

export const getBlogs = async(req, res) => {
    try {
        const dataBlogs = await Blog.getAllBlogs()
        res
        .status(200)
        .json({
            message: "Los blogs se obtuvieron exitosamente",
            data: dataBlogs
        });
    } catch (error) {
        res
        .status(500)
        .json({
            message: "Error al obtener los blogs",
            error: error
        });
    }
}

export const getBlog = async(req, res) => {
    try {
        const blog = await Blog.getBlogById(req.params.id);
        if(!blog) res.status(404).json({
            message: "Blog no encontrado"
        });
        res
        .status(200)
        .json({
            message: "Blog encontrado exitosamente",
            data: blog
        });
    } catch (error) {
        res
        .status(500)
        .json({ 
            message: "Error al obtener el blog",
            error: error
        });
    }
}

export const addBlog = async(req, res) => {
    try {
        req.body.imagen = req.file ? req.file.filename : null;
        const blog = await Blog.createBlog(req.body);
        res
        .status(201)
        .json({ 
            message: "Blog creado con exito",
            data: blog
        })
    } catch (error) {
        res
        .status(500)
        .json({ 
            message: "Error al crear el blog",
            error: error
        });
    }
}

export const editBlog = async (req, res) => {
    try { 
        req.body.image = req.file ? req.file.filename : null;
        const result = await Blog.updateBlog(req.params.id, req.body);
        res
        .status(200)
        .json({
            message: "Blog actualizado correctamente",
            data: result
        });
    } catch (error) {
        res
        .status(500)
        .json({ 
            message: "Error al actualizar el Blog",
            error: error
        });
    }
}

export const removeBlog = async (req, res) => {
    try {
        await Blog.deleteBlog(req.params.id);
        res
        .status(200)
        .json({
            message: "Blog eliminado"
        });
    } catch (error) {
        res
        .status(500)
        .json({ 
            message: "Error al eliminar el blog",
            error: error
        });
    }
}