import Skills from "../models/skillsModel.js";

// Chercher tous les skills
export const getSkills = async (req, res) => {
  try {
    const skills = await Skills.find();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve skills" });
  }
};

// Chercher un skill par son id et le faire update
export const updateSkills = async (req, res) => {
  const { name, value } = req.body; // Destructure the name and value from the request body

  try {
    // Chercher le skill par son nom dans la base de données
    const skills = await Skills.findOne({ name });

    if (!skills) {
      return res.status(404).json({ error: "Skills not found" });
    }

    // Faire update le skill avec la nouvelle valeur
    skills.value = value;

    // Sauvegarder le skill dans la base de données
    await skills.save();


    res.json({ message: "Skills updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update skills" });
  }
};
