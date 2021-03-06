import React from 'react';
import './style.css';

export default function About(props) {
    return (
        <div className={props.visible ? "body-show" : "body-hidden"}>
            <div className="title">
                <p>About ACM</p>
            </div>
            <div className="text-box">
                <p className="paragraph">The ACM chapter at the University of Connecticut is a student club interested in the advancement of technology. Membership is open to anyone with an interest in learning about technology, gaining professional advice, or those just looking to meet new people.
                    We offer student-run workshops which go over various fields of technology. In addition, we have companies come in to give presentations to members on tech in industry and how to develop as a professional. Along with those things, we also have various projects and activities going on throughout the year to keep all of our members engaged. At the end of the day, ACM has something to offer for anyone who is interested.
                </p>
            </div>
            
        </div>
    );
}
