import React from 'react'
import "./footer.css"

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">MASH</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
            </ul>
            <div className="footer__social">
                <a href="https://www.instagram.com/ariq__riq/" className="footer__social-link" target='_blank'>
                    <i className="bx bxl-instagram"></i>
                </a>
                <a href="https://github.com/Ariq69" className="footer__social-link" target='_blank'>
                    <i className="bx bxl-github"></i>
                </a>
            </div>
            <span className="footer__copy">&#169; {currentYear} Muhammad Ariq Sulthon Hanif. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer
