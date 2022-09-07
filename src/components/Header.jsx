import React, { useState } from 'react';
import AsideButton from './AsideButton';
import './Header.css';
import Menu from './Menu';

const THREE_HUNDRED = 300;

function Header() {
  const [fullHeader, setFullHeader] = useState();

  window.addEventListener('scroll', () => {
    if (window.scrollY > THREE_HUNDRED) {
      setFullHeader(true);
    } else {
      setFullHeader(false);
    }
  });
  return (
    <header className={ fullHeader ? 'header-full' : 'header' }>
      <div className="header-container">
        <section className="logo">
          <img src="https://i.im.ge/2022/08/26/Omf7lW.logo.png" width="70px" alt="logo" />
          <section className="text-header">
            <h1>Thales Chagas</h1>
            <h4>Fullstack Web Developer Student</h4>
          </section>
        </section>
        <Menu />
      </div>
      { fullHeader ? (
        <AsideButton />
      ) : (null) }
    </header>
  );
}

export default Header;
