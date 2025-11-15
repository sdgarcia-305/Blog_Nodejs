import pool from '../config/database.js';

export const getAllFavoritesBlogs = async() => {
    const [rows] = await pool.query(`
        SELECT
        fb.id,
        u.nombre AS nombre_usuario,
        b.titulo AS titulo_blog,
        fb.created_at
        FROM blogs_favoritos fb
        INNER JOIN usuarios u ON fb.id_usuario = u.id
        INNER JOIN blogs b ON fb.id_blog = b.id
        ORDER BY b.created_at DESC
    `);
    return rows;
}

export const getFavoriteBlogById = async(id) => {
    const [rows] = await pool.query(`
        SELECT
        fb.id,
        u.nombre AS nombre_usuario,
        b.titulo AS titulo_blog,
        fb.created_at
        FROM blogs_favoritos fb
        INNER JOIN usuarios u ON fb.id_usuario = u.id
        INNER JOIN blogs b ON fb.id_blog = b.id
        WHERE fb.id = ?
        `, [id]);
    return rows[0];
}

export const createFavoriteBlog = async() => {
    const {
        id_usuario,
        id_blog
    } = blogFavorito;
    const [result] = await pool.query(`
        INSERT INTO blogs_favoritos (
           id_usuario,
           id_blog
        )
        VALUES (?, ?)
        `, [id_usuario, id_blog]);
    return { id: result.insertId, data: result }
}

export const updateFavoriteBlog = async(id, blogFavorito) => {
    const {
        id_usuario,
        id_blog
    } = blogFavorito;
    const [result] = await pool.query(`
        UPDATE blogs_favoritos
        SET
        id_usuario = ?,
        id_blog = ?
        WHERE id = ?
        `, [ id_usuario, id_blog ]);
    return { result }
}

export const deleteFavoriteBlog = async(id) => {
    const [result] = await pool.query(`
        DELETE FROM blogs_favoritos WHERE id = ?
        `, [id]);
    return result.affectedRows;
}