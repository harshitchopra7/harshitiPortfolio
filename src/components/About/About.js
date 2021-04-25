import React from 'react';
import './About.css';
// import Button from '@material-ui/core/Button';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function About() {
    return (
        <div className="about">
            <div className="about_first">
                <p><span style={{color: 'red'}}>Hi,</span> my name is</p>
            </div>
            <div className="about_second">
                <p>Harshit Chopra.</p>
            </div>
            <div className="about_third">
                <p>I am a passionate web developer fascinated by the tech world.</p>
            </div>
            <div className="about_des">
                <p>I am a 3rd year undergrad student pursuing 
                    Computer Science Engineering. I love working 
                    on front end web development projects. 
                    I have <span style={{color: 'red'}}>developed 2 real 
                    world websites</span> till 
                    now that are currently being <span style={{color: 'red'}}>used by the 
                    people all over India</span>, and developing the 
                    third one. <br /> I am 3 star c++ and a 3 star python 
                    coder at HackerRank.
                </p>
            </div>
            <div className="icons">
                <a href="https://www.linkedin.com/in/harshit-chopra-b98a94189/" target="_blank" style={{color: "white"}} ><LinkedInIcon className="icon" style={{width: '50px', height: '50px'}} /></a>
                <a href="https://github.com/harshitchopra7" target="_blank" style={{color: "white"}} ><GitHubIcon className="icon" style={{width: '45px', height: '45px'}} /></a>
            </div>
            <div className="about_btn">
            <a href="mailto: chopraharshit2000@gmail.com"><button className="about_btnn">Get in Touch</button></a>
            </div>
        </div>
    );
}
export default About;