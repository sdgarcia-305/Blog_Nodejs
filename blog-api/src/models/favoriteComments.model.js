import pool from '../config/database.js';

export const getAllFavoritesComments = async() => {
    const [rows] = await pool.query(`
        SELECT
        fc.id
        u.nombre AS nombre_usuario,
        c.contenido AS contenido_comentario,
        fc.created_at
        FROM comment_favoritos fc
        INNER JOIN usuarios u ON fc.id_usuario = u.id
        INNER JOIN comentarios c ON fc.id_comentario = c.id
        ORDER BY c.created_at DESC
        `);
    return rows;
}

export const getFavoriteCommentById = async(id) => {
    const [rows] = await pool.query(`
        SELECT
        fc.id
        u.nombre AS nombre_usuario,
        c.contenido AS contenido_comentario,
        fc.created_at
        FROM comment_favoritos fc
        INNER JOIN usuarios u ON fc.id_usuario = u.id
        INNER JOIN comentarios c ON fc.id_comentario = c.id
        WHERE fc.id = ? 
        `, [id]);
    return rows [0];
}

export const createFavoriteComment = async() => {
    const {
        id_usuario,
        id_comentario
    } = comentarioFavorito;
    const [result] = await pool.query(`
        INSERT INTO comment_favoritos (
           id_usuario,
           id_comentario
        )
        VALUES (?, ?)
        `, [id_usuario, id_comentario]);
    return { id: result.insertId, data: result}
}

export const updateFavoriteComment = async(id, comentarioFavorito) => {
    const {
        id_usuario,
        id_comentario
    } = comentarioFavorito;
    const [result] = await pool.query(`
        UPDATE comment_favoritos
        SET
        id_usuario = ?,
        id_comentario = ?
        WHERE id = ?
        `, [id_usuario, id_comentario]);
    return { result }
}

export const deleteFavoriteComment = async(id) => {
    const [result] = await pool.query(`
        DELETE FROM comment_favoritos WHERE id = ?
        `, [id]);
    return result.affectedRows;
}