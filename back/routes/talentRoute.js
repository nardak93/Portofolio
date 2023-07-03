import express from 'express';
import GetTalents from '../controllers/talents.js';

const router = express.Router();

router.get('/talents', GetTalents);


export default router

