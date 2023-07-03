
import multer from 'multer';
import Project from '../models/Project.js';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  },
});

// Stockage et génération de noms de fichiers uniques.

const upload = multer({ storage: storage });

async function createProject(req, res) {
  upload.single('photo')(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: 'Error uploading file' });
    } else if (err) {
      return res.status(500).json({ error: 'Internal server error' });
    }

    const { name, description } = req.body;
    const photo = req.file.filename;

    try {
      const project = await Project.create({ photo, name, description });
      res.status(201).json(project);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
}

//Création de projet avec téléchargement de fichier.

export default {
  createProject,
};
