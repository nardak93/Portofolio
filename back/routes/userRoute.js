
import express from "express";
import { RegisterSubmit, LoginSubmit } from "../controllers/user.js";
import { verifyToken } from "../middlewares/authJwt.js";

const router = express.Router();

router.post("/login", LoginSubmit);
router.post("/register", RegisterSubmit);




router.get("/user", verifyToken, async (req, res) => {
    try {

      const user = await getUserById(req.userId);
  
      if (!user) {
        return res.status(404).json({ error: "Utilisateur non trouvé" });
      }
      const { _id, password, ...userData } = user;
  
      return res.status(200).json(userData);
    } catch (error) {
      return res.status(500).json({ error: "Erreur interne du serveur" });
    }
  });

router.get("/user/:id", verifyToken, (req, res) => {

});

router.get("/delete-user/:id",verifyToken, (req, res) => {

});

router.get("/logout",  (req, res) => {
    return res.status(200).json({ message: "Déconnecté avec succès" });

});

export default router;




