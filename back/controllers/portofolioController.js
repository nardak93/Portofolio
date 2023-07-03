import Project from '../models/projectModel.js';

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Fonction pour chercher un projet par son id

export const createProject = async (req, res) => {
  const { name, description, img } = req.body;

  try {
    const newProject = await Project.create({ name, description, img });
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

//Creation d'un nouveau projet
