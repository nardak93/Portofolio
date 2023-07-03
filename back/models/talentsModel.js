import mongoose from "mongoose";


// Modèle pour un talent avec les champs name, img et description.



let talentsSchema = mongoose.Schema({
    name: String,
    img: [
        {
            src: String,
            alt: String
        }
    ],
    description: String
},{
    timestamps: true
})

let Talents = mongoose.model('Talent', talentsSchema)

export default Talents
