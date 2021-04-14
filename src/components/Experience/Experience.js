import React from 'react';
import './Experience.css';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import react from '../images/react.svg';
import html from '../images/html.svg';
import css from '../images/css.svg';
import c from '../images/c.png';
import bootstrap from '../images/bootstrap.svg';
import firebase from '../images/firebase.png';
import github from '../images/github.svg';
import js from '../images/js.png';
import material from '../images/material.svg';
import wordpress from '../images/wordpress.png';
import woo from '../images/woo.svg';

function Experience() {
    return (
        <div className="experience">
            <div className="experience_heading">
                <p>Experience</p>
            </div>
            <div className="experience_show">
                <div className="experience1">
                    <div className="experience1_heading">
                        <p>VoluntHere</p>
                        {/* <p className="live_link">Live Link</p> */}
                    </div>
                    <div className="experience1_desc">
                        <p className="experience1_des"> <ArrowRightIcon /> Responsible for architecturing and building the responsive front end of the website on react with the team of 2 from scratch.</p>
                        <p className="experience1_des"> <ArrowRightIcon /> In this website the user can find various NGO's listings and can apply after registering to the website.</p>
                        <p className="experience1_des"> <ArrowRightIcon /> The user can also see, what NGOs they have applied to, got selected, rejected or application still pending to be reviewed.</p>
                        <p className="experience1_des"> <ArrowRightIcon /> The website also has a user dashboard where they can upload their photo, resume and change their password, phone number or email.</p>
                        <p className="experience1_des"> <ArrowRightIcon /> Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness</p>
                        <div className="tech_used">
                            <p>Tech Used </p>
                            <div className="tech_used_img">
                                <img src={js} alt="" />
                                <img src={react} alt="" />
                                <img src={html} alt="" />
                                <img src={css} alt="" />
                                <img src={firebase} alt="" />
                                <img src={bootstrap} alt="" />
                                <img src={github} alt="" />
                                <img src={material} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="experience2">
                    <div className="experience1_heading">
                        <p>Furnly</p>
                    </div>
                    <div className="experience1_desc">
                        <p className="experience1_des"> <ArrowRightIcon /> Single handedly designed and built a responsive ecommerce website from scratch on wordpress.</p>
                        <p className="experience1_des"> <ArrowRightIcon /> In this website the user can browse and buy furnitures.</p>
                        <p className="experience1_des"> <ArrowRightIcon /> Manually added Google Analytics on the website, and then analysed the user's data through it.</p>
                        <p className="experience1_des"> <ArrowRightIcon /> Built and added various components by using html and css.</p>
                        <div className="tech_used2">
                            <p>Tech Used </p>
                            <div className="tech_used_img2">
                                <img src={html} alt="" />
                                <img src={css} alt="" />
                                <img src={wordpress} alt="" />
                                <img src={woo} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;
