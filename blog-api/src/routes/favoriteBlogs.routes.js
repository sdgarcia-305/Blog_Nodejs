import express from 'express';
import { addFavoriteBlog, editFavoriteBlog, getFavoriteBlog, getFavoritesBlogs, removeFavoriteBlog } from '../controllers/favoriteBlogs.controller.js';

const router = express.Router();

router.get('/', getFavoritesBlogs);
router.get('/:id', getFavoriteBlog);
router.post('/', addFavoriteBlog);
router.put('/:id', editFavoriteBlog);
router.delete('/:id', removeFavoriteBlog);

export default router;