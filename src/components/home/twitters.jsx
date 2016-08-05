import React, { Component } from 'react';

/* Twitter style */
const centerTwit = {
  width: '80%',
  margin: 'auto'
}

const Twitters = () => {
  return (
    <div style={centerTwit}>
      <a href="https://twitter.com/steedhelix" className="twitter-timeline" data-show-count="false" data-show-screen-name="true">
      </a>
    </div>
  );
}

export default Twitters;
