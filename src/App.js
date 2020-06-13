import React from 'react';
import { Slide } from 'react-slideshow-image';
import logo from './images/logo.png';
import './App.css';

export function Header() {
  return (
    <div className="header-row">
      <div className="header-column header-logo-column">
        <img src={logo} className="header-logo" alt="header-logo"/>
      </div>
      <div className="header-column header-column-tabs">
        <p className="header-tab-text">About</p>
      </div>
      <div className="header-column header-column-tabs">
        <p className="header-tab-text">Subgroups</p>
      </div>
      <div className="header-column header-column-tabs">
        <p className="header-tab-text">Projects</p>
      </div>
      <div className="header-column header-column-tabs">
        <p className="header-tab-text">Tutorials</p>
      </div>
      <div className="header-column header-column-tabs">
        <p className="header-tab-text">Contact</p>
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <div className="footer-row">
      <div className="footer-column">
          <p>Resources</p>
      </div>
      <div className="footer-column">
        <img src={logo} alt="footer-logo"/>
      </div>
      <div className="footer-column">
        <p>Legal</p>
      </div>
    </div>
  );
}

export function Home() {
  return (
    <div className="home-body">
      <div className="home-title">
        <p>Welcome to UConn ACM</p>
      </div>
      <Slider/>
      <div className="about-container">
        <div className="about-title">
          <p>About Us</p>
        </div>
        <div className="about-text">
          <p>This will be filled with useful info eventually...</p>
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
