import React from 'react';
import logo from '../../assets/logo.png';
import './style.css';

export default function Footer() {
    return (
      <div className="footer-row">
        <div className="footer-column">
          <div className="logo-container">
            <img src={logo} className="logo" alt="footer-logo"/>
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