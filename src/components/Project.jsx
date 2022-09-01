import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Project({ data, id }) {
  const [cover, setCover] = useState(true);
  const { title, description } = data;

  const handleFocus = () => {
    console.log('oi');
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
          <div>
            <div className="title-project">{title}</div>
            <div className="desc-project">{description}</div>
          </div>
        )}
    </article>
  );
}

Project.propTypes = {
  data: PropTypes.object,
}.isRequired;

export default Project;
