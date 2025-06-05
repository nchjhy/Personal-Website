import React from 'react';
import './Project.css';
import githubIcon from './assets/github.svg';
import portfolioImg from './assets/portfolio.svg';
import boogledImg from './assets/boogled.png';
import aluminaImg from './assets/alumina.png';
import sdg15Img from './assets/sdg15.png';
import transientImg from './assets/transient.png';
import moneytreesImg from './assets/moneytrees.png';


const projects = [
  {
    title: "My Personal Website",
    tech: "React, HTML, CSS",
    description: "A personal portfolio showcasing UI/UX skills.",
    image: portfolioImg,
    link: "#"
  },
  {
    title: "Boogled Word Game",
    tech: "Java",
    description: "A word game app developed in Java.",
    image: boogledImg,
    link: "#"
  },
  {
    title: "SLU Alumina Website",
    tech: "Node.js, PHP, HTML, CSS",
    description: "An alumni platform for SLU graduates.",
    image: aluminaImg,
    link: "#"
  },
  {
    title: "SDG 15",
    tech: "HTML, CSS",
    description: "An environmental awareness project.",
    image: sdg15Img,
    link: "#"
  },
  {
    title: "Transient Booking System",
    tech: "Java",
    description: "A hotel booking interface mock-up.",
    image: transientImg,
    link: "#"
  },
  {
    title: "Money Trees",
    tech: "Figma",
    description: "A financial literacy promotional tool.",
    image: moneytreesImg,
    link: "#"
  }
];


const Project = () => {
  return (
    <section id="project" className="projects-section">
    <div className="project-header">
        <h2>Project Experience</h2>
        <p>Explore the projects I've worked so far.</p>
    </div>
    <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-icon">
                <img src={githubIcon} alt="GitHub" />
              </a>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="tech">{project.tech}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
