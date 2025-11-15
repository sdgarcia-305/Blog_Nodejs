import express from 'express';
import { upload } from '../middlewares/upload.middleware.js';
import { addBlog, editBlog, getBlog, getBlogs, removeBlog } from '../controllers/blog.controller.js';
import { deleteBlog } from '../models/blog.model.js';

const router = express.Router();

router.get('/', getBlogs);
router.get('/:id', getBlog);
router.post('/', upload.single('imagen'), addBlog);
router.put('/:id', upload.single('imagen'), editBlog);
router.delete('/:id', deleteBlog);

export default router;