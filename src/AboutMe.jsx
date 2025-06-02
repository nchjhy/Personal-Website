import React from 'react';
import './AboutMe.css';

import html from './assets/html.svg';
import css from './assets/css.svg';
import js from './assets/js.svg';
import react from './assets/react.svg';
import java from './assets/java.svg';
import python from './assets/python.svg';
import figma from './assets/figma.svg';
import github from './assets/github.svg';
import git from './assets/git.svg';
import wordpress from './assets/wordpress.svg';
import pfp from './assets/pfp.JPG';

const AboutMe = () => {
  return (
    <>
      {/* About Section */}
      <section id="about" className="about-top">
        <div className="about-container">
          <img src= {pfp} alt="Profile" className="profile-pic" />
          <div>
            <h2 className="about-heading">
              About Me <span className="line"></span>
            </h2>
            <p className="about-text">
              Greetings! My name is Nichole Jhoy Escaño. I am an aspiring UI/UX Designer and a third-year BS Information Technology student at Saint Louis University, Baguio City.
              I love designing websites that are both visually appealing and user-friendly. My goal is to create functional and beautiful websites that effectively convey your message.
              If you’re interested in hiring me, please contact me through the <strong>Connect</strong> tab.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <h3 className="section-title tech-header">tech stack</h3>
      <div className="tech-group">
        <div className="tech-row">
          <div className="tech-card"><img src={html} alt="HTML" /><span>HTML</span></div>
          <div className="tech-card"><img src={css} alt="CSS" /><span>CSS</span></div>
          <div className="tech-card"><img src={js} alt="JavaScript" /><span>JavaScript</span></div>
          <div className="tech-card"><img src={react} alt="React" /><span>React</span></div>
        </div>
        <div className="tech-row">
          <div className="tech-card"><img src={java} alt="Java" /><span>Java</span></div>
          <div className="tech-card"><img src={python} alt="Python" /><span>Python</span></div>
          <div className="tech-card"><img src={wordpress} alt="WordPress" /><span>WordPress</span></div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="section-header tools-header">
        <h3 className="section-title">tools</h3>
      </div>
      <div className="tech-grid">
        <div className="tech-card"><img src={figma} alt="Figma" /><span>Figma</span></div>
        <div className="tech-card"><img src={github} alt="GitHub" /><span>GitHub</span></div>
        <div className="tech-card"><img src={git} alt="Git" /><span>Git</span></div>
      </div>
    </>
  );
};

export default AboutMe;
