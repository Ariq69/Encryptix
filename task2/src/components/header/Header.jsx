import React, { useState, useEffect } from 'react';
import "./header.css";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const handleSetActiveLink = (link) => {
      setActiveLink(link);
  };

  const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentLink = "#home";
      sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
              currentLink = `#${section.id}`;
          }
      });
      setActiveLink(currentLink);
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
      <header className="header">
          <nav className="nav container">
              <a href="index.html" className="nav__logo">MASH</a>

              <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                  <ul className="nav__list grid">
                      <li className="nav__item">
                          <a href="#home" className={activeLink === "#home" ? "nav__link active-link" : "nav__link"} onClick={() => handleSetActiveLink("#home")}>
                              <i className="uil uil-estate nav__icon"></i>Home
                          </a>
                      </li>
                      <li className="nav__item">
                          <a href="#about" className={activeLink === "#about" ? "nav__link active-link" : "nav__link"} onClick={() => handleSetActiveLink("#about")}>
                              <i className="uil uil-user nav__icon"></i>About
                          </a>
                      </li>
                      <li className="nav__item">
                          <a href="#skills" className={activeLink === "#skills" ? "nav__link active-link" : "nav__link"} onClick={() => handleSetActiveLink("#skills")}>
                              <i className="uil uil-file-alt nav__icon"></i>Skills
                          </a>
                      </li>
                      {/* <li className="nav__item">
                          <a href="#services" className={activeLink === "#services" ? "nav__link active-link" : "nav__link"} onClick={() => handleSetActiveLink("#services")}>
                              <i className="uil uil-briefcase-alt nav__icon"></i>Services
                          </a>
                      </li> */}
                      <li className="nav__item">
                          <a href="#portfolio" className={activeLink === "#portfolio" ? "nav__link active-link" : "nav__link"} onClick={() => handleSetActiveLink("#portfolio")}>
                              <i className="uil uil-scenery nav__icon"></i>Portfolio
                          </a>
                      </li>
                      <li className="nav__item">
                          <a href="#contact" className={activeLink === "#contact" ? "nav__link active-link" : "nav__link"} onClick={() => handleSetActiveLink("#contact")}>
                              <i className="uil uil-message nav__icon"></i>Contact
                          </a>
                      </li>
                  </ul>
                  <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
              </div>
              <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                  <i className="uil uil-apps"></i>
              </div>
          </nav>
      </header>
  );
};

export default Header
