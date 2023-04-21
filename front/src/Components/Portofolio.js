import React from 'react';

import islande from '../Public/images/Laponie.png';
import html from '../Public/images/html1.png'
import css from '../Public/images/css1.png'
import js from '../Public/images/js1.png'
import node from '../Public/images/nodeJS.png'
import mongo from '../Public/images/mongo.png'
import carnet from '../Public/images/carnet.png'
import dragons from '../Public/images/dragons01.png'

const Portfolio = () => {
    return (
        <section className="portofolio">
            <h2>Portofolio</h2>
            <section className="projets">
                <section className="projet">
                    <img src={islande} alt="projet" />
                    <h3>SnowScape</h3>
                    <p>
                        Bienvenue sur notre blog consacré à l'Islande ! Ici, vous trouverez tout ce que vous devez savoir sur cette magnifique région du monde : ses paysages époustouflants, sa culture unique et sa faune et flore exceptionnelles. Nous partageons des histoires personnelles, des conseils de voyage et des recommandations d'activités pour vous aider à planifier votre propre voyage en Islande.

                        Nous encourageons également les commentaires de nos lecteurs. Que vous ayez déjà visité l'Islande ou que vous prévoyez de le faire bientôt, nous sommes ravis d'entendre vos expériences et vos opinions. N'hésitez pas à partager vos propres conseils de voyage, vos photos ou simplement vos impressions générales sur cette belle région.

                        Nous espérons que notre blog vous inspirera à découvrir l'Islande et à en apprendre davantage sur ce joyau caché du Nord. Merci de nous lire !
                    </p>
                    <section>Technologies utilisee:
                        <ul className="icons">
                            <li><img className="icon" src={html} alt="HTML5" /></li>
                            <li><img className="icon" src={css} alt="CSS" /></li>
                            <li><img className="icon" src={node} alt="nodeJS" /></li>
                            <li><img className="icon" src={mongo} alt="MongoDB" /></li>
                        </ul>
                    </section>
                </section>
                <section className="projet">
                    <img src={carnet} alt="projet" />
                    <h3>Carnet d'adresse</h3>
                    <p>
                        Un carnet d'adresses créé avec Node.js. Une application web qui permet de stocker et de gérer les informations de contact de différentes personnes. Cette application utilise Node.js comme environnement d'exécution côté serveur et MongoDB comme base de données pour stocker les données.

                        Les fonctionnalités de cette carnet d'adresses créé avec Node.js:
                        <ul>
                            <li>La création de nouveaux contacts avec leurs informations de contact</li>
                            <li>La mise à jour des informations existantes</li>
                            <li>La suppression de contacts</li>
                            <li>La recherche de contacts par nom ou par adresse e-mail</li>
                            <li>La gestion de groupes de contacts</li>
                        </ul>
                    </p>
                    <section>Technologies utilisee:
                        <ul className="icons">
                            <li><img className="icon" src={html} alt="HTML5" /></li>
                            <li><img className="icon" src={css} alt="CSS" /></li>
                            <li><img className="icon" src={node} alt="nodeJS" /></li>
                            <li><img className="icon" src={mongo} alt="MongoDB" /></li>
                        </ul>
                    </section>
                    <section class="projet">
                        <img src={dragons} alt="projet" />
                        <h3>Dragons</h3>
                        <p>Le jeu intitulé Dragons créé avec React et MongoDB est une application web qui permet aux utilisateurs de créer, modifier et gérer des dragons. Cette application utilise React pour l'interface utilisateur et MongoDB comme base de données pour stocker les informations des dragons.</p>
                        <section>Technologies utilisee:
                            <ul className="icons">
                                <li><img className="icon" src={html} alt="HTML5" /></li>
                                <li><img className="icon" src={css} alt="CSS" /></li>
                                <li><img className="icon" src={node} alt="nodeJS" /></li>
                                <li><img className="icon" src={mongo} alt="MongoDB" /></li>
                            </ul>
                        </section>
                    </section>
                </section>




            </section>
        </section>
    );
}

export default Portfolio;


