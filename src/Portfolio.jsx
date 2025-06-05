import './Portfolio.css';
import Navbar from './NavBar';
import AboutMe from './AboutMe';
import Project  from './Project';
import pfp from './assets/hero-image.svg';

function Portfolio() {
  return (
  <div id="home" className="homepage">
  <Navbar />
    <div className="hero-center">
      <div className="greetings">
        <span>Hello</span>
        <h1>I'm Nichole Jhoy</h1>
        <p>UI/UX & Web Development Portfolio</p>
      </div>
      <img src={pfp} alt="Profile Picture" className="hero-image" /> 
    </div>
    <AboutMe />
    <Project />
</div>
  );
}

export default Portfolio;


