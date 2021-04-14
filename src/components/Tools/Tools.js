import React from 'react';
import './Tools.css';
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
import ToolsImg from './ToolsImg';

function Tools() {
    return (
        <div className="tools">
            <div className="tools_heading">
                <p>Tech Stack</p>
            </div>
            <div className="tech_img">
                <ToolsImg img={react} name="react" />
                <ToolsImg img={js} name="JavaScript" />
                <ToolsImg img={html} name="html 5" />
                <ToolsImg img={css} name="css 3" />
                <ToolsImg img={firebase} name="firebase" />
                <ToolsImg img={c} name="c++" />
                <ToolsImg img={github} name="github" />
                <ToolsImg img={bootstrap} name="bootstrap" />
                <ToolsImg img={material} name="material UI" />
                <ToolsImg img={wordpress} name="wordpress" />
                {/* <img src={react} alt="" />
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
                <img src={github} alt="" />
                <img src={firebase} alt="" />
                <img src={c} alt="" />
                <img src={bootstrap} alt="" />
                <img src={material} alt="" />
                <img src={wordpress} alt="" /> */}
            </div>
        </div>
    )
}

export default Tools;
