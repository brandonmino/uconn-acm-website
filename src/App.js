import React from 'react';
import { Slide } from 'react-slideshow-image';
import logo from './images/logo.png';
import './App.css';

export function Header() {
  return (
    <div className="header-row">
      <div className="header-column">
        <img src={logo} className="header-logo" alt="header-logo"/>
      </div>
      <div className="header-column">
        <p className="header-about">About</p>
      </div>
      <div className="header-column">
        <p className="header-subgroups">Subgroups</p>
      </div>
      <div className="header-column">
        <p className="header-projects">Projects</p>
      </div>
      <div className="header-column">
        <p className="header-tutorials">Tutorials</p>
      </div>
      <div className="header-column">
        <p className="header-contact">Contact</p>
      </div>
    </div>
  )
}


export function Footer() {
  return (
    <div className="footer-row">
      <div className="footer-column">
        <div className="resources">
          <p className="footer-resources">Resources</p>
        </div>
      </div>
      <div className="footer-column">
        <img src={logo} className="footer-logo" alt="footer-logo"/>
      </div>
      <div className="footer-column">
        <p className="footer-legal">Legal</p>
      </div>
    </div>
  );
}

export function Home() {
  return (
    <div id="home-body">
      <p className="home-title"> Welcome to UConn ACM</p>
      <Slider/>
      <div id="about-container">
        <p className="about-title">About Us</p>
        <div className="about-text-container">
          <p className="about-text">
            This will be filled with useful info eventually...
          </p>
        </div>
      </div>
    </div>
  );
}

const slideProperties = {
  duration: 6000,
  transitionDuration: 1000,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

export default function Slider () {
  return (
      <div className="slide-container">
        <Slide {...slideProperties}>
          <div className="each-slide">
            <div style={{'backgroundImage': 'url(' + require('./images/placeholder1.jpg') + ')'}}></div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': 'url(' + require('./images/placeholder2.jpg') + ')'}}></div>
          </div>
        </Slide>
      </div>
  )
}
