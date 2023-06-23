import React from 'react';
import './circularProgress.css';

const CircularProgressBar = ({ color, value }) => {
  return (
    <div>
      <br />
      <div
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ '--value': value, '--fg': color }}
      ></div>
    </div>
  );
};

export default CircularProgressBar;
