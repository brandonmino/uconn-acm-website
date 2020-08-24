import React from 'react';
import './style.css';
import { Slide } from 'react-slideshow-image';

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
                    <div style={{'backgroundImage': 'url(' + require('../../images/placeholder1.jpg') + ')'}}></div>
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': 'url(' + require('../../images/placeholder2.jpg') + ')'}}></div>
                </div>
            </Slide>
        </div>
    );
}