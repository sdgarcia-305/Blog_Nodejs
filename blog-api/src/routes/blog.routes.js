import express from 'express';
import { addBlog, editBlog, getBlog, getBlogs, removeBlog } from '../controllers/blog.controller.js';

const router = express.Router();

router.get('/', getBlogs);
router.get('/:id', getBlog);
router.post('/', addBlog);
router.put('/:id', editBlog);
router.delete('/:id', removeBlog);

export default router;