import photo from '../Public/images/ali.jpg'
import html from '../Public/images/html1.png'
import css from '../Public/images/css1.png'
import js from '../Public/images/js1.png'
import node from '../Public/images/nodeJS.png'
import reactIcon from '../Public/images/react.png'
import axios from 'axios';
import React, { useEffect, useState } from 'react';


const PresentationCard = () => {
  const [presentation, setPresentation] = useState([]);

 useEffect(() => {
    axios.get(`${process.env.REACT_APP_HOST}/presentationCards`).then((res) => {
      setPresentation(res.data);
    });
  }, []);

  return (
    <div>
      {presentation.map((presentation, i) => (
        <div key={i}>
          <img className="moi" src={presentation.img[0].src} alt={presentation.img[0].alt} />
          <h4>{presentation.name}</h4>
          <p>{presentation.age}</p>
          <p>{presentation.city}</p>
          <p>{presentation.interests}</p>
          <p>{presentation.description}</p>
        </div>
      ))}
    </div>
  );
};



 


const About = () => {
  return (
    <>
      <h2>À propos de moi</h2>
      <section className="mid">
        <section className="presentation">
          <PresentationCard />
        </section>
        <section className="a-propos">
          <p>Bien décidé à engager une reconversion professionnelle depuis plusieurs années dans les métiers du web, j'ai entrepris de me former au métier de Développeur Web.</p>
          <p>Conscient du chemin à parcourir pour monter en compétences, je suis plus que jamais motivée à apprendre pour m'améliorer.</p>
          <p>Tout en prenant en compte que notre métier est en perpétuelle évolution, je considère qu'il est important de chercher continuellement à se former en repoussant les limites de ses connaissances.</p>
          <p>Après une formation chez <a href="https://3wa.fr/" target="_blank" rel="noopener noreferrer">3WA</a>, j'ai acquis de nombreuses compétences et connaissances grâce à des projets réalisés dans différents langages de programmation.</p>
          <ul className="technologies">
            <li><img className="icon" src={html} alt="html" /></li>
            <li><img className="icon" src={css} alt="css" /></li>
            <li><img className="icon" src={js} alt="javascript" /></li>
            <li><img className="icon" src={node} alt="nodejs" /></li>
            <li><img className="icon" src={reactIcon} alt="react" /></li>
          </ul>
        </section>
      </section>
    </>
  );
}

export default About;
