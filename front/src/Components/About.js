import React from 'react';
import photo from '../Public/images/ali.jpg'
import html from '../Public/images/html1.png'
import css from '../Public/images/css1.png'
import js from '../Public/images/js1.png'
import node from '../Public/images/nodeJS.png'
import reactIcon from '../Public/images/react.png'

function About() {
  return (
    <>
      <h2>À propos de moi</h2>
      <section className="mid">
        <section className="presentation">
          <img className="moi" src={photo} alt="photo de profil" />
          <p>Malik Ali</p>
          <p>29 ans</p>
          <p>Région Parisienne</p>
          <p>Centre d'intérêts</p>
          <p>Je suis passionné par le sport, la musique, la lecture et les voyages.</p>
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
