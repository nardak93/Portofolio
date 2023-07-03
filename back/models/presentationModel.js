import mongoose from "mongoose";

// Modèle pour la carte de présentation avec les champs name, age, city, interests, description et img

let presentationCardSchema = mongoose.Schema({
    name: String,
    age: String,
    city: String,
    interests: String,
    description: String,
    img: [
        {
            src: String,
            alt: String
        }
    ]
},{
    timestamps: true,
    collection: 'presentationcards' 
});


let PresentationCard = mongoose.model('presentationCard', presentationCardSchema);

export default PresentationCard;
