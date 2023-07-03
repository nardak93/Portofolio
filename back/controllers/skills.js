import Skills from "../models/skillsModel.js"




 const GetSkills = async (req,res) => {
    const skills = await Skills.find()
    res.json(skills)

}

// Fonction pour chercher un skill par son id

export default GetSkills










