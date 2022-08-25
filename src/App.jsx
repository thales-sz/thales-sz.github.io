import React from 'react';
import Header from './components/Header';
import './App.css';
import AsideContact from './components/AsideContact';
import FooterInitial from './components/FooterInitial';
import ProjectsLabel from './components/ProjectsLabel';

function App() {
  return (
    <main className="page">
      <Header />
      <h1 className="title">Web Developer.</h1>
      <section className="main-content">
        <article className="main-text">
          <span className="title-name">THALES SOUZA CHAGAS</span>
          <div className="introduction">
            <p id="first-text">Frontend Web Developer</p>
            <span id="second-text">
              From the past year I&apos;ve been working hard to
              improve myself on web development. I&apos;m studying at
              {' '}
              <a
                className="link-text"
                href="https://www.betrybe.com/"
                target="_blank"
                rel="noreferrer"
              >
                Trybe
              </a>
              <span id="last-text">
                and currently I&apos;m learning
                backend development. Welcome!
              </span>
            </span>
          </div>
          <nav className="intro-nav">
            <a href="#about">Read About Me</a>
            {' '}
            <span>or</span>
            {' '}
            <a href="projects">View My Projects</a>
          </nav>
        </article>
        <img className="main-photo" alt="thales chagas" src="./src/images/thales.png" />
      </section>
      <FooterInitial />
      <AsideContact />
      <ProjectsLabel />
    </main>
  );
}

export default App;
