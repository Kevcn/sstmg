import React from 'react';

// pure presentitional component

const Weather = props => (
  <td>
      <p>{props.title}</p>
      <p>{props.max}</p>
      <p>{props.min}</p>
  </td>
);

export default Weather;
