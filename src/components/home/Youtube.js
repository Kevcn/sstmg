import React from 'react';

// pure presentitional component

const Youtube = props => (
    <div className="youtube-box">
      <a href={props.link} target="_blank">
        <img src={props.img} />
        <h3>{props.title}</h3>
      </a>
    </div>
);

export default Youtube;
