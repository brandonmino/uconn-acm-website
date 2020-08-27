import React from 'react';
import logo from '../../assets/logo.png';
import './style.css';

export default function Header(props) {
    return (
      <div className="header-row">
        <div className="header-column header-logo-column">
          <img src={logo} className="header-logo" onClick={() => {props.handleCurrentScreen('home')}} alt="header-logo"/>
        </div>
        <div className="header-column header-column-tabs">
          <button type="button" className="header-tab-text" onClick={() => {props.handleCurrentScreen('about')}}>About</button>
        </div>
        <div className="header-column header-column-tabs">
          <button type="button" className="header-tab-text" onClick={() => {props.handleCurrentScreen('calendar')}}>Calendar</button>
        </div>
        <div className="header-column header-column-tabs">
          <button type="button" className="header-tab-text" onClick={() => {props.handleCurrentScreen('contact')}}>Contact</button>
        </div>
      </div>
    )
}