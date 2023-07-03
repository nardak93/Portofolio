import Talents from "../models/talentsModel.js";

 const GetTalents = async (req, res) => {
  const talents = await Talents.find();
  res.json(talents);
};

// Fonction pour chercher un talent par son id

export default GetTalents;





