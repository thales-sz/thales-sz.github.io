import React from 'react';
import './contactMe.css';
import { ImArrowRight } from 'react-icons/im';

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
      <nav className="information-nav">
        Contact information —
      </nav>
    </div>
  );
}

export default ContactMe;
