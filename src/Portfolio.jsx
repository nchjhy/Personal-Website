import AboutMe from './AboutMe';
import './Portfolio.css';
import Navbar from './NavBar';
import pfp from './assets/hero-image.svg';

function Portfolio() {
  return (
  <div className="homepage">
  <Navbar />
    <div className="hero-center">
      <div className="greetings">
        <span>Hello</span>
        <h1>I'm Nichole Jhoy</h1>
        <p>UI/UX Developer</p>
      </div>
      <img src={pfp} alt="Profile Picture" className="hero-image" /> 
    </div>
    <AboutMe />
</div>
  );
}

export default Portfolio;


