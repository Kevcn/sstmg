import React, { Component } from 'react';
import { Link } from 'react-router';

class Photography_home extends Component {
  render() {
    return (
      <div className="photography">
        <div className="top_sec">
          <div className="flexbox flex-end">
            <div className="exposure_triangle">
              <Link to="/photography/aperture" className="">Aperture</Link>
              <Link to="/photography/iso" className="">ISO</Link>
              <Link to="/photography/shutter" className="">Shutter Speed</Link>
            </div>
          </div>
          <div className="portrait-intro">
            <Link to="/photography/portrait" className="">
              <img src={this.props.route.portrait} alt="portrait"/>
              <h3>Portrait</h3>
            </Link>
          </div>
          <div className="clearfix">
            <div className="landscape-intro">
              <Link to="/photography/landscape" className="">
                <img src={this.props.route.landscape} alt="landscape"/>
                <h3>Landscape</h3>
              </Link>
            </div>
          </div>
          <div className="clearfix">
            <div className="nightscene-intro">
              <Link to="/photography/nightscene" className="">
                <img src={this.props.route.nightscene} alt="nightscene"/>
                <h3>Night Scene</h3>
              </Link>
            </div>
          </div>

          <div className="flexbox flex-end extra">
            <Link to="/photography/wideangle" className="">Wide Angle</Link>
            <Link to="/photography/accessories" className="">Accessories</Link>
            <Link to="/photography/d5500" className="">Nikon D5500</Link>
          </div>

        </div>

      </div>
    );
  }
}

export default Photography_home;
