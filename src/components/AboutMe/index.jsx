import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <section id="about">
      <h1 className="title-name">ABOUT ME</h1>
      <h2 className="second-title">A FEW WORDS ABOUT ME</h2>
      <article className="text-about-me">
        I&apos;m Thales Souza Chagas, a junior frontend developer who
        always focuses on learning something new through studies and projects in
        practice. I&apos;m passionate
        about making things happen through programming.
        Programming for me is bringing your ideas to life...
        It&apos;s amazing...
        <p className="second-text">
          I discovered myself in programming in 2016 where
          I made a significant technical course in electronics and programmed an
          arduino using C++ among other things, since then I&apos;m love with technology
        </p>
      </article>
      <article>images</article>
    </section>
  );
}

export default AboutMe;
