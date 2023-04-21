import React from 'react';
import wand from '../Public/images/wand.png'
import level from '../Public/images/stock.png'
import design from '../Public/images/design.png'

const Skills = () => {
  return (
    <div>
      <section className="middle-page-title">
        <h2>Ce que je peux faire</h2>
      </section>
      <section className="wrapper">
        <section className="my-skills">
          <ul>
            <li>
              <img className="icon" src={wand} alt="" />
              <h4>Applications Web</h4>
              <p>Création de sites web, de réseaux sociaux, de sites Corporate et sites vitrines, de Web apps...</p>
            </li>
            <li>
              <img className="icon" src={level} alt="" />
              <h4>SEO</h4>
              <p>Optimisation du référencement naturel de votre site web.</p>
            </li>
            <li>
              <img className="icon" src="./public/images/design.png" alt="" />
              <h4>Responsive design</h4>
              <p>Utilisation des technologies HTML5 / CSS3 pour réaliser des designs adaptatifs. Utilisation du framework React pour faciliter la réalisation et augmenter la productivité</p>
            </li>
          </ul>
        </section>
        <article className="competences" id="skills">
          <h2>Compétences</h2>
          <div id="html">
            <p>HTML</p>
            <progress value="90" max="100" />
          </div>
          <div>
            <p>CSS</p>
            <progress value="85" max="100" />
          </div>
          <div>
            <p>JavaScript</p>
            <progress value="80" max="100" />
          </div>
          <div>
            <p>NodeJs</p>
            <progress value="75" max="100" />
          </div>
          <div>
            <p>ReactJs</p>
            <progress value="70" max="100" />
          </div>
          <div>
            <p>MongoDB</p>
            <progress value="65" max="100" />
          </div>
        </article>
      </section>
    </div>
  );
}

export default Skills;
