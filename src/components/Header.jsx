import React, { useState } from 'react';
import './Header.css';
import Menu from './Menu';

const TWO_HUNDRED = 200;

function Header() {
  const [fullHeader, setFullHeader] = useState();

  window.addEventListener('scroll', () => {
    if (window.scrollY > TWO_HUNDRED) {
      setFullHeader(true);
    } else {
      setFullHeader(false);
    }
  });
  return (
    <header className={ fullHeader ? 'header-full' : 'header' }>
      <div className="header-container">
        <section className="logo">
          <img src="src/images/logo.png" width="70px" alt="logo" />
          <section className="text-header">
            <h1>Thales Chagas</h1>
            <h4>Fullstack Web Developer Student</h4>
          </section>
        </section>
        <Menu />
      </div>
    </header>
  );
}

export default Header;
