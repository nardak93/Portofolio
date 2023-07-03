import express from 'express';
import { getProjects, createProject } from '../controllers/portofolioController.js';

// Routeur pour les projets : GET et POST avec contrôleurs correspondants.

const router = express.Router();

router.get('/projects', getProjects);

router.post('/projects', createProject);

export default router;
