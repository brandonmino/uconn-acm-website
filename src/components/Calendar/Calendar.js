import React from 'react';
import './style.css';

export default function Calendar(props) {
    return (
        <div className={props.visible ? "body-show" : "body-hidden"}>
            <div className="title">
                <p className="title-text">Calendar</p>
            </div>
        </div>
    );
}