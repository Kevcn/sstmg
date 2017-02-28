import React, { Component } from 'react';
// import NavLink from './NavLink';
import { Link } from 'react-router';

class Frame extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <ul className="flexbox flex-end main-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/travel">Travel</Link></li>
            <li><Link to="/Workshop">Workshop</Link></li>
            <li><Link to="/photography">Photography</Link></li>
          </ul>
        </header>
        {this.props.children}
      </div>
    );
  }
}

export default Frame;
