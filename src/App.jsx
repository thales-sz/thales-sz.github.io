import React from 'react';
import Header from './components/Header';
import './App.css';
import AsideContact from './components/AsideContact';
import FooterInitial from './components/FooterInitial';
import ProjectsLabel from './components/ProjectsLabel';
import MainContent from './components/MainContent';
import ContentDivider from './components/ContentDivider';

function App() {
  return (
    <main className="page">
      <Header />
      <MainContent />
      <FooterInitial />
      <AsideContact />
      <ContentDivider />
      <ProjectsLabel />
      <ContentDivider />
    </main>
  );
}

export default App;
