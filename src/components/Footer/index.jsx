import React from 'react';
import { BiCopyright } from 'react-icons/bi';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <hr className="footer-hr" />
      <div className="footer-text-copy">
        <BiCopyright size="20px" />
        2022 — Thales Souza Chagas.
      </div>
      <div className="footer-text">
        Made with Vite, React and
        {' '}
        <BsFillSuitHeartFill />
        {' '}
        in Rio de Janeiro, Brazil
      </div>
    </footer>
  );
}

export default Footer;
