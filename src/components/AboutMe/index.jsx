import React from 'react';
import './AboutMe.css';
import { IoPawSharp } from 'react-icons/io5';
import Slider from '../Slider';

function AboutMe() {
  return (
    <section id="about">
      <h1 className="title-name">ABOUT ME</h1>
      <h2 className="second-title">A FEW WORDS ABOUT ME</h2>
      <article className="text-about-me">
        I&apos;m Thales Souza Chagas, a junior frontend developer who
        always focus on learning something new through studies and projects in
        practice. I&apos;m passionate
        about making things happen through programming.
        Programming for me is bringing your ideas to life...
        It&apos;s amazing...
        <p className="second-text">
          I discovered myself in programming in 2016 where
          I had my first contact with an
          arduino using C++ among other things. Since then I&apos;m love with technology
          and programming.
          In my spare time, I always like to
          be around my family and friends, cook a good dish,
          read a good book, workout and gaming a little.
        </p>
        <div className="second-text">
          I also love dogs
          {' '}
          <IoPawSharp />
        </div>
      </article>
      <Slider />
    </section>
  );
}

export default AboutMe;
