import express from 'express';
import { addFavoriteComment, editFavoriteComment, getFavoriteComment, getFavoritesComments, removeFavoriteComment } from '../controllers/favoriteComment.controller.js';
import multer from 'multer';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { createFavoriteCommentSchema } from '../schemas/favoriteComment.schema.js';

const router = express.Router();
const upload = multer();

router.get('/', getFavoritesComments);
router.get('/:id', getFavoriteComment);
router.post('/', upload.none(), validateSchema(createFavoriteCommentSchema), addFavoriteComment);
router.put('/:id', editFavoriteComment);
router.delete('/:id', removeFavoriteComment);

export default router;