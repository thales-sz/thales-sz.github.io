import React from 'react';

import './Header.css';
import Menu from './Menu';

function Header() {
  return (
    <header className="header">
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
      <div className="fade" />
    </header>
  );
}

export default Header;
