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

  const handleClick = () => {
    console.log('hellu');
  };
  return (
    <button
      className="contact-me"
      type="button"
      onMouseOver={ handleHover }
      onMouseOut={ handleOut }
      onBlur={ handleOut }
      onFocus={ handleHover }
      onClick={ handleClick }
    >
      <div className="contact-icon">
        <MdOutlineMailOutline size="32px" />
      </div>
      {contactMeText ? (
        <span id="contact-text">
          Contact Me
        </span>
      ) : null}
    </button>
  );
}

export default AsideContact;
