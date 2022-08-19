import React from 'react';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <main className="page">
      <Header />
      <h1 className="title">Web Developer</h1>
      <article className="main-text">
        <p className="title-name">THALES SOUZA CHAGAS</p>
        <h1 className="introduction">
          Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eum asperiores
          sint aperiam iusto quasi dicta error officia.
          Maxime obcaecati culpa inventore repellat quasi
          facilis dicta debitis architecto eveniet, dolore nisi.
        </h1>
      </article>
      <Footer />
    </main>
  );
}

export default App;
