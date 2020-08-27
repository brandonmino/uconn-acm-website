import React from 'react';
import Slider from '../Slider/Slider';
import './style.css';

export default function Home(props) {
    return (
      <div className={props.visible ? "body-show" : "body-hidden"}>
        <div className="title">
          <p className="title-text">Welcome to Uconn ACM</p>
        </div>
        <Slider/>
      </div>
    );
}