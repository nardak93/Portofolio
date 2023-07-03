
import express from 'express';
import cors from 'cors';
import userRouter from './routes/userRoute.js';
import connectDB from './config/database.js';
import skillRouter from './routes/skillRoute.js';
import talentRouter from './routes/talentRoute.js';
import presentationRouter from './routes/presentationRoute.js';
import contactRoutes from './routes/contactRoutes.js';
import projectRouter from './routes/projectRouter.js';
import portfolioRouter from './routes/portofolioRouter.js';
import updateSkillsRouter from './routes/updateSkillsRoute.js';
import path from 'path';
import dotenv from 'dotenv';


//Configuration du serveur backend avec les routes et la connexion à la base de données.

dotenv.config();


const app = express();

// Initialisation du middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// Serve static files
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, 'public', 'uploads')));

connectDB().then(() => {
  app.use('/', userRouter);
  app.use('/', skillRouter);
  app.use('/', talentRouter);
  app.use('/', presentationRouter);
  app.use('/', contactRoutes);
  app.use('/projects', projectRouter);
  app.use('/api/portfolio', portfolioRouter);
  app.use('/api/updateSkills', updateSkillsRouter);

  app.listen(process.env.PORT, () => {
    console.log(`Serveur démarré sur ${process.env.HOST}${process.env.PORT}`);
  });

  //Adresse au backend pour les requêtes HTTP : ${process.env.REACT_APP_HOST}
}).catch((error) => {
  console.error('Database connection error:', error);
});