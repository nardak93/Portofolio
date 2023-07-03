import mongoose from 'mongoose';

// Modèle pour la carte de présentation avec les champs name, age, city, interests, description et img

const projectSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
  collection: 'projects'
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
