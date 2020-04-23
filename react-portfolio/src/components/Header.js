import React from 'react';
import {Link} from "react-router-dom";

function Header(){
    return(
        <div className="header">
            <div className="heading">
                <h1>Marc Alan Tapp</h1>
                <h3>JavaScript Web Developer</h3>
                <h3>&</h3>
                <h3>Student at Lambda School</h3>
            </div>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/recent">Recent Projects</Link>
            </nav>
        </div>
    )
}

export default Header;