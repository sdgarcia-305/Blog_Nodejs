import express from 'express';
import { addFavoriteBlog, editFavoriteBlog, getFavoriteBlog, getFavoritesBlogs, removeFavoriteBlog } from '../controllers/favoriteBlog.controller.js';
import multer from 'multer';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { createFavoriteBlogSchema} from '../schemas/favoriteBlog.schema.js';

const router = express.Router();
const upload = multer();

router.get('/', getFavoritesBlogs);
router.get('/:id', getFavoriteBlog);
router.post('/', upload.none(), validateSchema(createFavoriteBlogSchema), addFavoriteBlog);
router.put('/:id', editFavoriteBlog);
router.delete('/:id', removeFavoriteBlog);

export default router;