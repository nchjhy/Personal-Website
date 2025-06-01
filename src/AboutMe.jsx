import React from 'react';
import './AboutMe.css';  
import html from './assets/html.svg';
import css from './assets/css.svg';
import js from './assets/js.svg';
import react from './assets/react.svg';
import java from './assets/java.svg';
import python  from './assets/python.svg';
import figma  from './assets/figma.svg';
import github from './assets/github.svg';
import git from './assets/git.svg';
import wordpress from './assets/wordpress.svg';


const AboutMe = () => {
  return (
    <section id="about" className="about-section">
    <div className="about-top">
      <h2 className="about-heading">About Me</h2>
      <p className="about-paragraph">
      Greetings! My name is Nichole Jhoy Escaño. I am an aspiring UI/UX Designer and a third-year BS Information Technology student at Saint Louis University, Baguio City.
      I love designing websites that are both visually appealing and user-friendly. My goal is to create functional and beautiful websites that effectively convey your message.
      If you're interested in hiring me, please contact me through the <span>Connect</span> tab.
    </p>
    <p className="about-paragraph">
      When I'm not coding or designing, I love exploring new technologies, reading books, and enjoying the outdoors. I also watch TV series and movies and listen to music leisurely.
    </p>
  </div>
  
  {/* Tech Stack & Tools */}

  <div className="tech-tools-section">
  <div className="section-header tech-header">
    <h3 className="section-title">tech stack</h3>
  </div>
  <div className="tech-grid">
    <div className="tech-grid">
        <div className="tech-card">
          <img src={html} alt="HTML" />
          <span>HTML</span>
        </div>
        <div className="tech-card">
          <img src= {css} alt="CSS" />
          <span>CSS</span>
        </div>
        <div className="tech-card">
          <img src= {js} alt="JavaScript" />
          <span>JavaScript</span>
        </div>
        <div className="tech-card">
          <img src= {react} alt="React" />
          <span>React</span>
        </div>
        <div className="tech-card">
          <img src= {java} alt="Java" />
          <span>Java</span>
        </div>
        <div className="tech-card">
          <img src= {python} alt="Python" />
          <span>Python</span>
        </div>
        <div className="tech-card">
          <img src= {wordpress} alt="WordPress" />
          <span>WordPress</span>
        </div>
  </div>
</div>

<div className="section-header tools-header">
    <h3 className="section-title">tools</h3>
  </div>
  <div className="tech-grid">
   <div className="tech-card">
      <img src= {figma} alt="Figma" />
      <span>Figma</span>
    </div>
    <div className="tech-card">
      <img src= {github} alt="GitHub" />
      <span>GitHub</span>
    </div>
    <div className="tech-card">
      <img src= {git} alt="Git" />
      <span>Git</span>
    </div>
  </div>
  </div>
 </section>
  );
};

export default AboutMe;
