
import express from 'express';
import multer from 'multer';
import projectModel from '../models/projectModel.js';

const router = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const originalName = file.originalname;
    const fileExtension = originalName.substring(originalName.lastIndexOf('.'));
    const modifiedName = file.fieldname + '-' + uniqueSuffix + fileExtension;
    cb(null, modifiedName);
  },
});

// Routeur avec configuration de stockage pour les fichiers téléchargés.

const upload = multer({ storage: storage });


router.get('/', (req, res) => {
  projectModel
    .find()
    .then((projects) => res.json(projects))
    .catch((err) => res.status(400).json({ error: err.message }));
});
// Chercher tous les projets
router.post('/', upload.single('img'), (req, res) => {
  const { name, description } = req.body;
  const img = req.file.filename;

  const newProject = new projectModel({ img, name, description });

  newProject
    .save()
    .then(() => res.json('Project added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Trouver un projet par son ID
router.get('/:id', (req, res) => {
  projectModel
    .findById(req.params.id)
    .then((project) => res.json(project))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Faire une mise à jour d'un projet par son ID
router.put('/:id', (req, res) => {
  projectModel
    .findById(req.params.id)
    .then((project) => {
      project.img = req.body.img;
      project.name = req.body.name;
      project.description = req.body.description;

      project
        .save()
        .then(() => res.json('Project updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Effacer un projet par son ID
router.delete('/:id', (req, res) => {
  projectModel
    .findByIdAndDelete(req.params.id)
    .then(() => res.json('Project deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Route pour l'administration
router.get('/admin', (req, res) => {
  res.send('Admin route');
});

export default router;

