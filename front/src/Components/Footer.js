import React, { useState } from "react";
import "../App.css";

const Footer = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <footer role="contentinfo" aria-label="Footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>© 2023 Malik Ali</p>
          </div>
          <div
            className="col-md-6"
            aria-label="Footer Navigation"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ul className="list-inline" role="list">
              <li className="list-inline-item">
                <a href="/" role="link" className={hovered ? "hovered" : ""}>
                  Home
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/portofolio" role="link" className={hovered ? "hovered" : ""}>
                  Portofolio
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/contact" role="link" className={hovered ? "hovered" : ""}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;