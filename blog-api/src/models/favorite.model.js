import pool from '../config/database.js';

export const getAllFavorites = async() => {
    const [rows] = await pool.query(`
        SELECT
        f.id,
        u.nombre AS nombre_usuario,
        b.titulo AS titulo_blog,
        f.created_at
        FROM favoritos f
        INNER JOIN usuarios u ON f.id_usuario = u.id
        INNER JOIN blogs b ON f.id_blog = b.id
        ORDER BY b.created_at DESC
    `);
    return rows;
}

export const getFavoriteById = async(id) => {
    const [rows] = await pool.query(`
        SELECT
        f.id,
        u.nombre AS nombre_usuario,
        b.titulo AS titulo_blog,
        f.created_at
        FROM favoritos f
        INNER JOIN usuarios u ON f.id_usuario = u.id
        INNER JOIN blogs b ON f.id_blog = b.id
        WHERE f.id = ?
        `, [id]);
        return rows[0];
}

export const createFavorite = async() => {
    const {
        id_usuario,
        id_blog
    } = favorito;
    const [result] = await pool.query(`
        INSERT INTO favoritos (
           id_usuario,
           id_blog
        )
        VALUES (?, ?)
        `, [id_usuario, id_blog]);
    return { id: result.insertId, data: result }
}

export const updateFavorite = async(id, favorito) => {
    const {
        id_usuario,
        id_blog
    } = favorito;
    const [result] = await pool.query(`
        UPDATE favoritos
        SET
        id_usuario = ?,
        id_blog = ?
        WHERE id = ?
        `, [ id_usuario, id_blog ]);
    return { result }
}

export const deleteFavorite = async(id) => {
    const [result] = await pool.query(`
        DELETE FROM favoritos WHERE id = ?
        `, [id]);
    return result.affectedRows;
}