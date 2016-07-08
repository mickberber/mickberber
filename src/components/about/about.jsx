import React, { Component } from 'react';
//import NavBar from './../navBar';
import Nav from './../nav';
import HomeWall from './../home/homeWall';

export default class About extends Component {
  render() {
    return (
      <div>
        <Nav textColor='black' />
        <img style={{height: '100%', width: '100%', objectFit: 'fill', zIndex: '-100', position: 'fixed', opacity: '0.1'}} src='./../../assets/avaya.jpg'/>
        <div className='container'>
          <div style={{height: '125px'}} />
          <div>About me... in pictures</div>
          <div className='row'>
            <img style={{height: '400px', width: '60%', padding: '20px', margin: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', backgroundColor: 'white', float: 'right'}} src='./../../assets/cable.JPG'/>
          </div>
          <div style={{height: '50px'}} />
          <div className='row'>
            <img style={{height: '400px', width: '60%', padding: '20px', margin: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', backgroundColor: 'white'}} src='./../../assets/lfc.JPG'/>
          </div>
          <div style={{height: '50px'}} />
          <div className='row'>
            <img style={{height: '400px', width: '40%', padding: '20px', margin: '10px',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', backgroundColor: 'white'}} src='./../../assets/palace.JPG'/>
            <img style={{height: '400px', width: '40%', padding: '20px', margin: '10px',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', backgroundColor: 'white', float: 'right'}} src='./../../assets/food.JPG'/>
          </div>
          <div style={{height: '50px'}} />
          <div className='row'>
            <img style={{height: '600px', width: '40%', padding: '20px', margin: '10px',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', backgroundColor: 'white'}} src='./../../assets/sf.JPG'/>
          </div>
        </div>
      </div>
    );
  }
}
