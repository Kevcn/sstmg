import React, { Component } from 'react';
import { Link } from 'react-router';

class Photography extends Component {
  render() {
    return (
      <div className="photography_page_wrapper">
        <header className="photography_header">
          <ul className="flexbox flex-end photography_nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/travel">Travel</Link></li>
            <li><Link to="/Workshop">Workshop</Link></li>
            <li><Link to="/photography">Photography</Link></li>
          </ul>
        </header>
        <div className="photography_content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Photography;
