import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Connection a la base de donnée

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.DB_URL}`);

    // Addresse de la base de donnée : mongodb:// + adresse IP du serveur + port + nom de la base de donnée
    console.log('Connected to the database');
  } catch (error) {
    console.error('Database connection error:', error);
  }
};

// Exportation de la fonction connectDB

export default connectDB;