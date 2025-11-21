import pool from '../config/database.js';

export const existComment = async(id) => {
    const [rows] = await pool.query('SELECT id FROM comentarios WHERE id = ?', [id]);
    return rows[0] || null;
};