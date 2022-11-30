import React from 'react';
import './contactMe.css';
import { ImArrowRight } from 'react-icons/im';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

function ContactMe() {
  return (
    <div id="contact">
      <h1 className="title-name">CONTACT ME</h1>
      <h2 className="second-title">NEED A DEVELOPER?</h2>
      <a id="first-text" href="https://www.linkedin.com/in/thales-sz/" target="_blank" rel="noreferrer">
        Let&apos;s work together!
        <div className="icon">
          <ImArrowRight size="40px" />
        </div>
      </a>
      <hr />
      {/* <h1 className="subtitle">Get in Touch</h1> */}
      <div className="info-container">
        <nav className="information-nav">
          <h1>Contact information —</h1>
          <p>Feel free to reach out to me any time.</p>
          <div className="email-phone">
            <p>
              Email:
              {' '}
              <a href="mailto:thales.souz@outlook.com">
                thales.souz@outlook.com
              </a>
            </p>
            <p>
              Phone:
              {' '}
              <span>
                +55 (24) 999035459
              </span>
            </p>
          </div>
        </nav>
        <nav className="nav-links">
          <h1>Links —</h1>
          <a className="link-nav" href="https://github.com/thales-sz" rel="noreferrer" target="_blank">
            <FaGithubSquare size="60px" />
            GitHub
          </a>
          <a className="link-nav" href="https://www.linkedin.com/in/thales-sz/" rel="noreferrer" target="_blank">
            <FaLinkedin size="60px" />
            Linkedin
          </a>
          <a className="download" href="https://www.linkedin.com/in/thales-sz/">Download CV</a>
        </nav>
        <nav className="social-nav">
          <h1>Follow me on —</h1>
          <a href="https://www.instagram.com/thales.sc/" rel="noreferrer" target="_blank">Instagram</a>
          <a href="https://twitter.com/thalessouz1" rel="noreferrer" target="_blank">Twitter</a>
          <a href="https://www.hackerrank.com/thales_souz" rel="noreferrer" target="_blank">Hackerrank</a>
          <a href="https://www.linkedin.com/in/thales-sz/" rel="noreferrer" target="_blank">Linkedin</a>
        </nav>
      </div>
    </div>
  );
}

export default ContactMe;
