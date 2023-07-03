const express = require('express');
const multer = require('multer');
const router = express.Router();
const Project = require('../models/projectModel.js');


// Routeur pour la création de projet avec téléchargement de fichier.

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

router.use(express.json());

router.post('/projects', upload.single('photo'), async (req, res) => {
  try {
    const { name, description } = req.body;
    const photo = req.file.filename;

    const project = await Project.create({ photo, name, description });
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;