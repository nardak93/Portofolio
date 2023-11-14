
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import User from "../models/UserModel.js";

export const verifyToken = async (req, res, next) => {
  let token = req.headers.authorization;
  token = token&&token.split(" ")[1];
  

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Payload:", decoded);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ error: "Utilisateur non trouvé" });
    }
    req.user = user;
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
        const tokenPayload = {
          userId: user._id,
          isAdmin: user.isAdmin, 
        };

        const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, {
          expiresIn: '1h',
        });

        return res.status(200).json({ token });
      }

      return res.status(401).json({ error: "Invalid password" });
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};