import React from 'react';

// pure presentitional component

const News = props => (
  <div className="news-box">
    <a href={props.link} target="_blank">
      <img src={props.img} />
      <h3>{props.title}</h3>
    </a>
    <p>{props.desc}</p>
  </div>
);

export default News;
