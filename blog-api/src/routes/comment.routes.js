import express from "express";
import { addComment, editComment, getComment, getComments, removeComment } from "../controllers/comment.controller.js";
import multer from 'multer';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { createCommentSchema } from '../schemas/comment.schema.js';

const router = express.Router();
const upload = multer();

router.get('/', getComments);
router.get('/:id', getComment);
router.post('/', upload.none(), validateSchema(createCommentSchema), addComment);
router.put('/:id', editComment);
router.delete('/:id', removeComment);

export default router;