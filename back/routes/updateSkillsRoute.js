import express from 'express';
import { getSkills, updateSkills } from '../controllers/updateSkills.js';

const router = express.Router();

// Chercher les skills
router.get('/', getSkills);  

// Mettre à jour les skills
router.put('/:id', updateSkills);  

export default router;
