import React from 'react';
import Slider from '../Slider/Slider';
import './style.css';

export default function Home() {
    return (
      <div className="body">
        <div className="title">
          <p>Welcome to UConn ACM</p>
        </div>
        <Slider/>
      </div>
    );
}