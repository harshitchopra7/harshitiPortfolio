import React from 'react';
import './Navbar.css';

var a="<HC />";

function Navbar() {
    return (

        //Home
        //About
        //Tools and Skills
        //Projects
        //Works
        //Contact

        <div className="navbar">
            <div className="navbar_left">
                <p>{a}</p>
            </div>
            <div className="navbar_right">
                <ul>
                    <li>About</li>
                    <li>Tools</li>
                    <li>Experience</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
}
export default Navbar;