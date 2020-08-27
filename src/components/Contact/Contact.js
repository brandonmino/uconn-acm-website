import React from 'react';
import './style.css';

export default function Contact(props) {
    return (
        <div className={props.visible ? "body-show" : "body-hidden"}>
            <div className="title">
                <p className="title-text">Contact Us</p>
            </div>
            <form action="https://mailthis.to/uconnacm" method="POST" encType="multipart/form-data">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name"/>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="_replyto" placeholder="Your email"/>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="10" placeholder="Enter your message here"></textarea>
                <input type="hidden" name="_subject" value="Contact form submitted"/>
                <input type="hidden" name="_honeypot" value=""/>
                <input type="submit" value="Send"/>
            </form>
        </div>
    );
}