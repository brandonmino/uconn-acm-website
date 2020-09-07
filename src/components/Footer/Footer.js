import React from 'react';
import logo from '../../assets/logo.png';
import mslogo from '../../assets/MSLearn.png';
import rmlogo from '../../assets/ripplematchlogo.png';
import './style.css';

export default function Footer() {
    return (
      <div className="footer-row">
        <div className="footer-column">
          <div className="logo-container">
            <div className="image-container">
              <img src={rmlogo} className="logo" alt="footer-rm-logo"/>
            </div>
            <div className="image-container">
              <img src={logo} className="logo" color="transparent" alt="footer-logo"/>
            </div>
            <div className="image-container">
              <img src={mslogo} className="logo" alt="footer-ms-logo"/>
            </div>
          </div>
          <div className="resource-paragraph">
            <p>Association for Computing Machinery <br/>
              University of Connecticut <br/>
              Storrs, CT
            </p>
          </div>
        </div>
      </div>
    );
}