import React from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import './AsideButton.css';

function AsideButton() {
  return (
    <a
      className="to-home"
      type="button"
      href="#home"
    >
      <div className="contact-icon">
        <AiOutlineArrowUp size="34px" />
      </div>
    </a>
  );
}

export default AsideButton;
