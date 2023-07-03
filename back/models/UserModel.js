import mongoose from "mongoose";
import bcrypt from 'bcrypt'

//Modèle pour un utilisateur avec les champs login, email, password, isAdmin et image. Le mot de passe est hashé avant d'être enregistré en utilisant bcrypt. Une méthode authenticate est définie pour vérifier l'authentification de l'utilisateur en comparant le mot de passe fourni avec le mot de passe haché stocké en base de données.


let userSchema = mongoose.Schema({
    login: String,
    email: {
        type: String,
        unique: true,
        lowercase:true
    },
    password: String,
    isAdmin: Boolean,
    image: {
        src: String,
        alt: String 

    }
},
    {
        timestamps: true,
        collection: 'Users'
        }
        
        )
        userSchema.pre('save', async function(next) {
            if(this.isModified('password') && this.password){
                this.password = await bcrypt.hash(this.password, 10);
            }
            next();
        })

    

        userSchema.statics.authenticate = async function(email, password){
            const user = await this.findOne({email: email});
            if(!user){
                return null;
            }
            const result = await bcrypt.compare(password, user.password);
            return result ? user : null;
        }

        let User = mongoose.model('User', userSchema);

        export default User;
            

