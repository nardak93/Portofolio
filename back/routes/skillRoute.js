import  express  from "express";
import  GetSkills  from "../controllers/skills.js";

const router = express.Router()

router.get('/skills', GetSkills)


export default router



