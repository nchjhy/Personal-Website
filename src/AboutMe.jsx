import React from 'react';
import './AboutMe.css';  

const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="about-heading">About Me</h2>
      <p className="about-paragraph">
          Greetings! My name is Nichole Jhoy Escaño. I am an aspiring UI/UX Designer and a third-year BS Information Technology student at Saint Louis University, Baguio City. 
          I love designing websites that are both visually appealing and user-friendly. My goal is to create functional and beautiful websites that effectively convey your message. 
          If you're interested in hiring me, please contact me through the <span>Connect</span> tab.
      </p>
      {<p className="about-paragraph">
         When I'm not coding or designing, I love exploring new technologies, reading books, and enjoying the outdoors. I also watch TV series and movies and listen to music leisurely.
      </p> }
    </section>
  );
};

export default AboutMe;
