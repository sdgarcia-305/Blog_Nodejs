import express from 'express';
import { addFavoriteComment, editFavoriteComment, getFavoriteComment, getFavoritesComments, removeFavoriteComment } from '../controllers/favoriteComments.controller.js';

const router = express.Router();

router.get('/', getFavoritesComments);
router.get('/:id', getFavoriteComment);
router.post('/', addFavoriteComment);
router.put('/:id', editFavoriteComment);
router.delete('/:id', removeFavoriteComment);

export default router;