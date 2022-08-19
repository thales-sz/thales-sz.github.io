import React from 'react';
import { MdOutlineMailOutline } from 'react-icons/md';
import './AsideContact.css';

function AsideContact() {
  return (
    <div id="helper">
      <div className="contact-me">
        <div className="contact-icon">
          <MdOutlineMailOutline size="32px" />
        </div>
        <span id="contact-text">
          Contact Me
        </span>
      </div>
    </div>
  );
}

export default AsideContact;
