import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moi from '../Public/images/123.png';


import '../App.css';

const Skills = () => {
  const [competences, setCompetences] = useState([]);
  const [talents, setTalents] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_HOST}/skills`).then((res) => {
      setCompetences(res.data);
    });

    axios.get(`${process.env.REACT_APP_HOST}/talents`).then((res) => {
      setTalents(res.data);
    });
  }, []);

  useEffect(() => {
    const progressAnimationDuration = 3000; 

    const animateProgressBars = () => {
      const progressBars = document.querySelectorAll('.progress-bar-fill');

      progressBars.forEach((progressBar) => {
        const targetWidth = progressBar.getAttribute('data-value');
        progressBar.style.width = `${targetWidth}%`;
      });
    };

    
    const animationTimer = setInterval(animateProgressBars, progressAnimationDuration);

   
    return () => clearInterval(animationTimer);
  }, []);

  const Talents = () => {
    return (
      <div>
        {talents.map((talent, i) => (
          <div key={i}>
            <img className="icon" src={talent.img[0].src} alt={talent.img[0].alt} />
            <h4>{talent.name}</h4>
            <p>{talent.description}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <section className="middle-page-title">
        <img className='logo-ma' src={moi}/>
        <h2>Ce que je peux faire</h2>
      </section>
      <section className="wrapper">
        <section className="my-skills">
          <ul>
            <li>
              <Talents />
            </li>
          </ul>
        </section>
        <article className="competences" id="skills">
          <h2>Compétences</h2>
          {competences.map((skill, i) => (
            <div key={i} id={skill.name}>
              <p>{skill.name}</p>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ width: 0 }} 
                  data-value={skill.value} 
                ></div>
              </div>
            </div>
          ))}
        </article>
      </section>
    </div>
  );
};

export default Skills;
