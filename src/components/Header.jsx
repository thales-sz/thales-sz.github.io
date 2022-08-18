import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <img src="src/images/logo.png" width="70px" alt="logo" />
        <section className="text-header">
          <h2>Thales Chagas</h2>
          <h5>Fullstack Web Developer Student</h5>
        </section>
      </div>
      <div className="fade" />
    </header>
  );
}

export default Header;
