import express from 'express';
import submitContactForm from '../controllers/contactController.js';

// Routeur pour la soumission du formulaire de contact

const router = express.Router();


router.post('/contact', submitContactForm);

export default router;
