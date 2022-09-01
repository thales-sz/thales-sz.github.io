import React from 'react';
import './ProjectsLabel.css';
import data from './projects/projectsData';
import Project from './Project';

export default function ProjectsLabel() {
  return (
    <div className="projects-container">
      <h1 className="project-title">PROJECTS</h1>
      <section className="projects">
        {data.map((project, i) => <Project key={ i } data={ project } id={ i } />)}
      </section>
    </div>
  );
}
