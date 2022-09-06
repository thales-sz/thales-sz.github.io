import React, { useState } from 'react';
import { MdOutlineMailOutline } from 'react-icons/md';
import './AsideContact.css';

const INTERVAL = 650;

function AsideContact() {
  const [contactMeText, setContactMeText] = useState(false);

  const handleHover = () => {
    setTimeout(() => {
      setContactMeText(true);
    }, INTERVAL);
  };

  const handleOut = () => {
    setContactMeText(false);
  };

  return (
    <a
      className="contact-me"
      type="button"
      onMouseOver={ handleHover }
      onMouseOut={ handleOut }
      onBlur={ handleOut }
      onFocus={ handleHover }
      href="#contact"
    >
      <div className="contact-icon">
        <MdOutlineMailOutline size="34px" />
      </div>
      {contactMeText ? (
        <span id="contact-text">
          Contact Me
        </span>
      ) : null}
    </a>
  );
}

export default AsideContact;
