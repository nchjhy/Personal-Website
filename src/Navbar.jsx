import React from 'react';
import './Navbar.css';
import logo from './assets/logo.svg';

function Navbar() {
  return (
    <>
      <header className="navbar">
        <nav className="navbar-nav">
          <div className="navbar-section left">
            <img src={logo} alt="Logo" className="logo" />
          </div>

          <div className="navbar-section center">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#project">Projects</a>
            <a href="#connect">Connect</a>
          </div>

          <div className="navbar-section right">
            <a href="#about" className="profile-btn">My Profile</a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
