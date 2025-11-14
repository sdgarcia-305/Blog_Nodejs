import express from 'express';
import { addFavorite, editFavorite, getFavorite, getFavorites, removeFavorite } from '../controllers/favorite.controller.js';

const router = express.Router();

router.get('/', getFavorites);
router.get('/:id', getFavorite);
router.post('/', addFavorite);
router.put('/:id', editFavorite);
router.delete('/:id', removeFavorite);

export default router;