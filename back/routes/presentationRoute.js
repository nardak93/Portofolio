import express from 'express';

import GetPresentation from '../controllers/presentation.js';
import PresentationCard from "../models/presentationModel.js";

const router = express.Router();


router.get('/presentationcards', GetPresentation);


export default router


