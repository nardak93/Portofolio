
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Portfolio = ({ projectsUpdated }) => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_HOST}/projects`)
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, [projectsUpdated]);

    return (
        <section className="portofolio">
            <h2>Portofolio</h2>
            <section className="projets">
                {projects.map((project, index) => (
                    <section key={index} className="projet">
                        <img src={`${process.env.REACT_APP_HOST}/uploads/${project.img}`} alt="projet" />
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <section>Technologies utilisées:
                            <ul className="icons">
                                <li><img className="icon" src={process.env.PUBLIC_URL + '/images/html1.png'} alt="HTML5" /></li>
                                <li><img className="icon" src={process.env.PUBLIC_URL + '/images/css1.png'} alt="CSS" /></li>
                                <li><img className="icon" src={process.env.PUBLIC_URL + '/images/nodeJS.png'} alt="nodeJS" /></li>
                                <li><img className="icon" src={process.env.PUBLIC_URL + '/images/mongo.png'} alt="MongoDB" /></li>
                            </ul>
                        </section>
                    </section>
                ))}
            </section>
        </section>
    );
}

export default Portfolio;










