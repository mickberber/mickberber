import React, { Component } from 'react';
//import NavBar from './../navBar';
import Nav from './../nav';
import HomeWall from './../home/homeWall';

export default class About extends Component {
  render() {
    return (
      <div>
        <Nav textColor='black' />
        <div className='container'>
          <div style={{height: '150px'}} />
          <div className='row'>
            <img style={{height: '400px', width: '40%', padding: '20px', margin: '10px',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', float: 'right'}} src='./../../assets/food.JPG'/>
          </div>
          <div style={{height: '50px'}} />
          <div className='row'>
            <img style={{height: '400px', width: '40%', padding: '20px', margin: '10px',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} src='./../../assets/food.JPG'/>
          </div>
          <div style={{height: '50px'}} />
          <div className='row'>
            <img style={{height: '400px', width: '40%', padding: '20px', margin: '10px',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', float: 'right'}} src='./../../assets/food.JPG'/>
          </div>
          <div style={{height: '50px'}} />
          <div className='row'>
            <img style={{height: '400px', width: '40%', padding: '20px', margin: '10px',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} src='./../../assets/food.JPG'/>
          </div>
        </div>
      </div>
    );
  }
}
