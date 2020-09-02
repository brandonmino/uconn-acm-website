import React from 'react';
import './style.css';

export default function Calendar(props) {
    const teamsLink = <a href="https://teams.microsoft.com/l/team/19%3a16ed5e9184ef467faf9e57d0eee453f6%40thread.tacv2/conversations?groupId=5dd01973-aa2d-451f-9784-d47bc5561bc1&tenantId=17f1a87e-2a25-4eaa-b9df-9d439034b080" className="link-text">here</a>
    return (
        <div className={props.visible ? "body-show" : "body-hidden"}>
            <div className="title">
                <p>Calendar</p>
            </div>
            <div className="calendar-container calendar-title-container">
                <p className="header-text">All general body meetings are on Tuesdays on 7pm via Microsoft Teams. To join our Team, click {teamsLink}</p>
            </div>
            <div className="calendar-container">
                <div className="item-container top-item-container">
                    <p className="calendar-text-header">Week 1 / September 8: &nbsp;</p>
                    <p className="calendar-text-body">Introduction to ACM</p>
                </div>
            </div>
            <div className="calendar-container">
                <div className="item-container">
                    <p className="calendar-text-header">Week 2 / September 15: &nbsp;</p>
                    <p className="calendar-text-body">Microsoft Learn Workshop</p>
                </div>
            </div>
            <div className="calendar-container">
                <div className="item-container">
                    <p className="calendar-text-header">Week 2 / September 16: &nbsp;</p>
                    <p className="calendar-text-body">UPE & ACM Cigna Event</p>
                </div>
            </div>
            <div className="calendar-container">
                <div className="item-container">
                    <p className="calendar-text-header">Week 3 / September 22: &nbsp;</p>
                    <p className="calendar-text-body">Fast Enterprise Info Session & Resume Critique</p>
                </div>
            </div>
            <div className="calendar-container">
                <div className="item-container">
                    <p className="calendar-text-header">Week 4 / September 29: &nbsp;</p>
                    <p className="calendar-text-body">Cigna Big Data Workshop</p>
                </div>
            </div>
            <div className="calendar-container">
                <div className="item-container">
                    <p className="calendar-text-header">Week 5 / October 6: &nbsp;</p>
                    <p className="calendar-text-body">Travelers Workshop</p>
                </div>
            </div>
            <div className="calendar-container">
                <div className="item-container">
                    <p className="calendar-text-header">Week 6 / October 13: &nbsp;</p>
                    <p className="calendar-text-body">TBD</p>
                </div>
            </div>
            <div className="calendar-container">
                <div className="item-container">
                    <p className="calendar-text-header">Week 7 / October 20: &nbsp;</p>
                    <p className="calendar-text-body">Brooksource Info Session and Interview Tips</p>
                </div>
            </div>
            <div className="calendar-container">
                <div className="item-container">
                    <p className="calendar-text-header">Week 8 / October 27: &nbsp;</p>
                    <p className="calendar-text-body">TBD</p>
                </div>
            </div>
            <div className="calendar-container">
                <div className="item-container">
                    <p className="calendar-text-header">Week 9 / November 3: &nbsp;</p>
                    <p className="calendar-text-body">TBD</p>
                </div>
            </div>
            <div className="calendar-container">
                <div className="item-container">
                    <p className="calendar-text-header">Week 10 / November 10: &nbsp;</p>
                    <p className="calendar-text-body">TBD</p>
                </div>
            </div>
            <div className="calendar-container">
                <div className="item-container">
                    <p className="calendar-text-header">Week 11 / November 17: &nbsp;</p>
                    <p className="calendar-text-body">TBD</p>
                </div>
            </div>
        </div>
    );
}