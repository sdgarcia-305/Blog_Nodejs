import express from 'express';
import { addSubcategory, editSubcategory, getSubCategories, getSubcategory, removeSubcategory } from '../controllers/subcategory.controller.js';

const router = express.Router();

router.get('/', getSubCategories);
router.get('/:id', getSubcategory);
router.post('/', addSubcategory);
router.put('/:id', editSubcategory);
router.delete('/:id', removeSubcategory);

export default router;
