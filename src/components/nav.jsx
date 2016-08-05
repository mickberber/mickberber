import React, { Component } from 'react';
import { Link } from 'react-router';

const Nav = ({ textColor }) => {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-collapse collapse" id="footer">
              <ul className="nav navbar-nav">
                <li><a href='/'><div style={{color: textColor }}><i className="fa fa-home" aria-hidden="true"></i> home</div></a></li>
                <li><Link to="contact"><div style={{color: textColor }}><i className="fa fa-envelope-o" aria-hidden="true"></i> contact</div></Link></li>
                <li><Link to='about'><div style={{color: textColor }}><i className="fa fa-camera-retro" aria-hidden="true"></i> gallery</div></Link></li>
                <li><Link to='projects'><div style={{color: textColor }}><i className="fa fa-code-fork" aria-hidden="true"></i> projects</div></Link></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="https://linkedin.com/in/michaelberber"><div style={{color: textColor }}><i className="fa fa-linkedin" aria-hidden="true"></i> LinkedIn</div></a></li>
                <li><a href="https://github.com/mickberber"><div style={{color: textColor }}><i className="fa fa-github-alt" aria-hidden="true"></i> Github</div></a></li>
                <li><a href="https://medium.com/@steedhelix"><div style={{color: textColor }}><i className="fa fa-medium" aria-hidden="true"></i> Blog</div></a></li>
                <li><a href="https://twitter.com/steedhelix"><div style={{color: textColor }}><i className="fa fa-twitter" aria-hidden="true"></i> Twitter</div></a></li>
              </ul>
            </div>
          </div>
        </nav>
    );
}

export default Nav;
