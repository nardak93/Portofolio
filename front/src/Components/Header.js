
import React, { useState, useEffect } from 'react';
import moonIcon from '../Public/images/moon.png';
import gitIcon from '../Public/images/git.png'
import telIcon from '../Public/images/telephone.png'
import linkIcon from '../Public/images/linkedin.png'
import '../App.css';


const Header = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [isNightMode, setIsNightMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const images = ['/images/hero01.jpg', '/images/hero02.jpg', '/images/hero03.jpg', '/images/hero05.jpg'];

  useEffect(() => {
    const slider = document.querySelector('.slider');
    slider.style.backgroundImage = `url(${images[currentImage]})`;
    slider.style.backgroundSize = 'cover';
    slider.style.backgroundPosition = 'center';
    slider.style.backgroundRepeat = 'no-repeat';
    slider.style.height = '100vh';

    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 9000);

    return () => clearInterval(intervalId);
  }, [currentImage, images]);

  useEffect(() => {
    const navbar = document.querySelector('nav');
    const halfPageHeight = document.documentElement.scrollHeight / 5;

    const handleScroll = () => {
      if (window.scrollY > halfPageHeight) {
        navbar.classList.add('white');
        navbar.style.height = '60px';
        navbar.style.transition = '0.3s ease-in-out';
      } else {
        navbar.classList.remove('white');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
    document.body.classList.toggle("night-mode");
    document.body.classList.toggle("active");
    document.getElementById("night-mode-toggle").classList.toggle("active");
    document.querySelector('.social').style.color = 'white';
  };

  const handleHamburgerClick = () => {
    setMenuOpen(!menuOpen);
  };

  const navListClass = menuOpen ? "active" : "";

  useEffect(() => {
    const nightModeToggle = document.getElementById("night-mode-toggle");
    nightModeToggle.addEventListener("click", toggleNightMode);
  
    const hamburgerMenu = document.querySelector('.hamburger-menu');
  
    hamburgerMenu.addEventListener('click', handleHamburgerClick);
  
    const phoneBtn = document.querySelector('.phone-btn');
    phoneBtn.addEventListener('click', (event) => {
      event.preventDefault();
      const phoneSpan = document.querySelector('.phone-span');
      phoneSpan.classList.toggle('hidden');
    });
  
    return () => {
      nightModeToggle.removeEventListener("click", toggleNightMode);
      hamburgerMenu.removeEventListener('click', handleHamburgerClick);
      phoneBtn.removeEventListener('click', (event) => {
        event.preventDefault();
        const phoneSpan = document.querySelector('.phone-span');
        phoneSpan.classList.toggle('hidden');
      });
    };
  }, [menuOpen]);

  return (
    <>
      {isLoading && (
        <div id="loading">
          <div className="loader"></div>
        </div>
      )}
      <header>
        <nav>
          <ul className={navListClass}>
            <li><a href='/'>Home</a></li>
            <li><a href="/portofolio">Portofolio</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <button id="night-mode-toggle"><img className="moon" src={moonIcon} alt="moon icon"/></button>
          <section>
            <li>
              <p className="name">Malik Ali</p>
            </li>
          </section>
          <div className="hamburger-menu">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </nav>
      </header>
      <main>
        <section>
          <article>
            <section className="slider"></section>
          </article>
          <section className="subtitle-container">
          <section className="subTitle">
            <h1>Bonjour, je suis Malik Ali</h1>
            <h2>Developpeur web FullStack</h2>
          </section>
          </section>
          <section className="social">
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/ali-malik-07a973233" target="_blank">
                  <img src={linkIcon} alt="linkedin"/>
                </a>
              </li>
              <li>
                <a href="https://github.com/nardak93">
                  <img src={gitIcon} alt="github"/>
                </a>
              </li>
              <li>
                <a href="#" className="phone-btn">
                  <img src={telIcon} alt="numero"/>
                </a>
                <span>06 21 05 14 22</span>
              </li>
            </ul>
          </section>
        </section>
      </main>
    </>
  );
}

export default Header;
