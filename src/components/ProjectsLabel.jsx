import React from 'react';
import './ProjectsLabel.css';
import data from './projects/projectsData';
import Project from './Project';

export default function ProjectsLabel() {
  return (
    <div className="projects-container" id="projects">
      <h1 className="title-name">SELECTED PROJECTS</h1>
      <h2 className="text-projects">
        These projects were made during my
        development course at
        {' '}
        <a href="https://www.betrybe.com/" target="_blank" rel="noreferrer">Trybe.</a>
        {' '}
        See some of them...
      </h2>
      <section className="projects">
        {data.map((project, i) => <Project key={ i } data={ project } id={ i } />)}
      </section>
    </div>
  );
}
