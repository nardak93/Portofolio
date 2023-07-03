import User from '../models/UserModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Fonction pour chercher un user par son id

export const RegisterSubmit = async (req, res) => {
   let verifMail = await User.findOne({email: req.body.email});
    if(verifMail){
        return res.json({message: 'Email already exist'})
    }

    let user = {
        login: req.body.login,
        email: req.body.email,
        password: req.body.pwd,

    }

    // Schema pour créer un nouvel user
    let newUser = new User(user);


    await newUser.save();

    res.json({message: 'User created'})

}

// Fonction pour chercher un user par son id

export const LoginSubmit = async (req, res) => {

    const user = await User.findOne({email: req.body.email});

    if(user) {
        bcrypt.compare(req.body.pwd, user.password, (err, result) => {
            if(result){
                const token = jwt.sign({id:user.id}, process.env.JWT_SECRET, {
                    expiresIn: 86400
                })

                // Hashage du mot de passe

             res.json({id: user._id,
                login: user.login,
                email: user.email,
                isAdmin: user.isAdmin,
                role: user.role,
                favoris: user.favoris,
                token: token
            })

            
            }else {
                return res.json({message: 'Les mots de passe ne correspondent pas'})
            }
        })
    } else {
        res.json({message: 'Utilisateur non trouvé'})
}
}

        
    






