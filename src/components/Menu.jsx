import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';

function Menu() {
  const [visibleMenu, setVisibleMenu] = useState(false);

  const handleFocus = ({ target: { id } }) => {
    const menuContainer = document.querySelector('.menu-hamburger');
    switch (id) {
    case 'contact-nav':
      menuContainer.style.backgroundImage = 'url(https://i.im.ge/2022/08/26/OmfiCG.contact.png)';
      break;
    case 'projects-nav':
      menuContainer.style.backgroundImage = 'url(https://i.im.ge/2022/08/26/OmfhDL.project.png)';
      break;
    default:
      menuContainer.style.backgroundImage = 'url(https://i.im.ge/2022/08/26/OmfLec.about.png)';
      break;
    }
  };

  const handleBlur = () => {
    console.log('blur');
    const menuContainer = document.querySelector('.menu-hamburger');
    menuContainer.style.backgroundImage = '';
    menuContainer.style.backgroundColor = '#3a5f6f';
  };

  const handleMenuClick = () => {
    setVisibleMenu(!visibleMenu);
  };

  return (
    <aside>
      {visibleMenu ? (
        <menu className="menu-hamburger">
          <button
            className="menu-container-close"
            type="button"
            onClick={ handleMenuClick }
          >
            <h3 id="menu-text">CLOSE</h3>
            <IoCloseSharp size="50px" />
          </button>
          <hr id="divider" />
          <nav className="menu-nav">
            <a
              id="projects-nav"
              href="#projects"
              onFocus={ handleFocus }
              onMouseOver={ handleFocus }
              onBlur={ handleBlur }
              onMouseOut={ handleBlur }
            >
              Projects
            </a>
            <hr />
            <a
              id="about-nav"
              href="#skills"
              onFocus={ handleFocus }
              onMouseOver={ handleFocus }
              onBlur={ handleBlur }
              onMouseOut={ handleBlur }
            >
              About Me

            </a>
            <hr />
            <a
              id="contact-nav"
              href="#home"
              onFocus={ handleFocus }
              onMouseOver={ handleFocus }
              onBlur={ handleBlur }
              onMouseOut={ handleBlur }
            >
              Contact

            </a>
            <hr />
          </nav>
        </menu>
      ) : (
        <button className="menu-container" type="button" onClick={ handleMenuClick }>
          <h3 id="menu-text">MENU</h3>
          <GiHamburgerMenu size="40px" />
        </button>
      )}
    </aside>
  );
}

export default Menu;
