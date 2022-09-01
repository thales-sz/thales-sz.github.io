import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';
import { ImDice } from 'react-icons/im';

function Project({ data, id }) {
  const [cover, setCover] = useState(true);
  const { title, description, links } = data;

  const handleFocus = () => {
    setCover(false);
  };

  const handleBlur = () => {
    setCover(true);
  };
  return (
    <article
      className={ `project-box${id}` }
      onMouseOver={ handleFocus }
      onFocus={ handleFocus }
      onMouseOut={ handleBlur }
      onBlur={ handleBlur }
    >
      {cover ? (
        <div className="cover">
          <div className="title-project">{title}</div>
          <div className="desc-project">{description}</div>
        </div>
      )
        : (
          <div className="no-cover">
            <div className="title-project">{title}</div>
            <hr />
            <div className="desc-project">{description}</div>
            <hr />
            <nav className="links-nav">
              <a href={ links.github } target="_blank" rel="noreferrer" className="link">
                Git Repository
                <FaGithub size="50px" />
              </a>
              <a href={ links.vercel } target="_blank" rel="noreferrer" className="link">
                Demonstration
                <ImDice size="50px" />
              </a>
            </nav>
          </div>
        )}
    </article>
  );
}

Project.propTypes = {
  data: PropTypes.object,
}.isRequired;

export default Project;
