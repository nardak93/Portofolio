import mongoose from "mongoose";

// Modèle pour une compétence avec les champs name et value.



const skillsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Skills = mongoose.model('Skill', skillsSchema);

export default Skills;