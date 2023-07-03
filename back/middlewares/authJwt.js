import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import User from "../models/UserModel.js";

export const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

export const loginSubmit = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Internal server error" });
      }

      if (result) {
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });

        return res.status(200).json({ token });
      }

      return res.status(401).json({ error: "Invalid password" });
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};


// Vérification du token JWT et soumission de connexion utilisateur avec bcrypt

