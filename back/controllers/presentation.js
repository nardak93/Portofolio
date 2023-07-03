import PresentationCard from "../models/presentationModel.js";

const GetPresentation = async (req, res) => {
    const presentation = await PresentationCard.find();
    res.json(presentation);
};

// Fonction pour chercher un projet par son id

export default GetPresentation;
