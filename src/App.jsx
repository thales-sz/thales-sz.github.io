import React from 'react';
import Header from './components/Header';
import './App.css';
import AsideContact from './components/AsideContact';
import FooterInitial from './components/FooterInitial';
import ProjectsLabel from './components/ProjectsLabel';
import MainContent from './components/MainContent';
import ContentDivider from './components/ContentDivider';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <main className="page" id="home">
      <Header />
      <MainContent />
      <FooterInitial />
      <ContentDivider />
      <ProjectsLabel />
      <ContentDivider />
      <AboutMe />
      <ContentDivider />
      <AsideContact />
    </main>
  );
}

export default App;
