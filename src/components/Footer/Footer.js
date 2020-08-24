import React from 'react';
import logo from '../../images/logo.png';
import './style.css';

export default function Footer() {
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