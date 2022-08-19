import React from 'react';
import { MdOutlineMailOutline } from 'react-icons/md';
import './Footer.css';

function Footer() {
  return (
    <button type="button" className="button-contact-me">
      <MdOutlineMailOutline size="30px" />
    </button>
  );
}

export default Footer;
