import React from 'react';
import { Component } from 'react';
import HomeWall from './homeWall';
import Twitters from './twitters';
import Nav from './../nav';

const App = () => {
    return (
      <div>
        <Nav textColor='black' />
        <HomeWall />
        <Twitters />
      </div>
    );
}

export default App;
