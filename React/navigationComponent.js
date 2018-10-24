import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
  render () {
    return (
      <nav className="main-nav">
        <ul className="grid-x">
          <li className="cell">
            <Link className="Home" to="/">Home</Link>
          </li>
          <li className="cell">
            <Link className="Register" to="/Register">Register</Link>
          </li>
          <li className="cell">
            <Link className="how-it-works" to="/HowItWorks">How It Works</Link>
          </li>
          <li className="cell">
            <Link className="prizes" to="/Prizes">Prizes</Link>
          </li>
        </ul>
      </nav>
      
    );
  }
}

export default Navigation;