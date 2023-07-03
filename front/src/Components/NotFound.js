
import { Link } from 'react-router-dom';


import React from 'react';

const NotFound = () => {
  return (
    <div>
      <h1>Page non trouvée</h1>
      <p>La page demandée est introuvable.</p>
      <Link to="/">Retourner à la page d'accueil</Link>
    </div>
  );
};

export default NotFound;