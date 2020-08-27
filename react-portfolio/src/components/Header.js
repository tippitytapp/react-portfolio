import React from 'react';
import { Link } from "react-router-dom";
import * as logo from "../assets/newlogo.png"
import * as resume from "../downloads/Marc Tapp Resume.pdf"

function Header(){
    return (
      <div className="header">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link class="navbar-brand">Marc Tapp</Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link to="/" class="nav-link">
                  Home <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/about" class="nav-link">
                  About
                </Link>
              </li>
              <li class="nav-item dropdown">
                {/* <a class="nav-link" download href={resume}>
                  Download Resume
                </a> */}
                <Link
                  to="/resume"
                  class="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Resume
                </Link>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://www.github.com/tippitytapp"
                  target="_blank"
                >
                  <i class="fab fa-github"></i>&nbsp;Github
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://www.linkedin.com/in/marctapp"
                  target="_blank"
                >
                  <i class="fab fa-linkedin"></i>&nbsp;LinkedIn
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://www.twitter.com/tappmarcalan"
                  target="_blank"
                >
                  <i class="fab fa-twitter"></i>&nbsp;Twitter
                </a>
              </li>
            </ul>
            <span class="navbar-text">Full Stack Development</span>
          </div>
        </nav>
      </div>
    );
}

export default Header;