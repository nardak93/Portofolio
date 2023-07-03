
import express from "express";
import { RegisterSubmit, LoginSubmit } from "../controllers/user.js";

const router = express.Router();

router.post("/login", LoginSubmit);
router.post("/register", RegisterSubmit);


// En cours de construction


router.get("/user", (req, res) => {

});

router.get("/user/:id", (req, res) => {

});

router.get("/delete-user/:id", (req, res) => {

});

router.get("/logout", (req, res) => {

});

export default router;


