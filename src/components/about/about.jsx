import React, { Component } from 'react';
//import NavBar from './../navBar';
import Nav from './../nav';
import HomeWall from './../home/homeWall';

export default class About extends Component {
  render() {
    return (
      <div>
        <Nav textColor='black' />
        <div style={{height: '100px'}}/>
        <div className='row'>
          <div style={{marginLeft:'25px'}}>I have a really cool dog, And I cook a little bit...</div>
        </div>
        <img style={{height: '500px', width: '50%', padding: '20px'}} src='./../../assets/IMG_0925.JPG'/>
        <img style={{height: '500px', width: '50%', padding: '20px', float: 'right'}} src='./../../assets/food.JPG'/>
        <div style={{height: '100px'}}/>
        <div className='row'>
          <div style={{marginLeft:'25px'}}>I'm a red, YNWA</div>
        </div>
        <img style={{height: '500px', width: '50%', padding: '20px'}} src='./../../assets/lfc.jpg'/>
        <img style={{height: '500px', width: '50%', padding: '20px', float: 'right'}} src='./../../assets/lfc2.jpg'/>
        <div style={{height: '100px'}}/>
        <div className='row'>
          <div style={{marginLeft:'25px'}}>The GOAT, my all time favorite... LET'S GO OAKLAND</div>
        </div>
        <img style={{height: '500px', width: '50%', padding: '20px'}} src='./../../assets/HENDERSON.jpg'/>
        <img style={{height: '500px', width: '50%', padding: '20px', float: 'right'}} src='./../../assets/oak.jpg'/>
        <div style={{height: '100px'}}/>
        <div className='row'>
          <div style={{marginLeft:'25px'}}>I have black and blue in my veins</div>
        </div>
        <img style={{height: '500px', width: '50%', padding: '20px'}} src='./../../assets/avaya.jpg'/>
        <img style={{height: '500px', width: '50%', padding: '20px', float: 'right'}} src='./../../assets/gordon.jpg'/>
        <div style={{height: '100px'}}/>
        <div className='row'>
          <div style={{marginLeft:'25px'}}>And I take some decent photos</div>
        </div>
        <img style={{height: '500px', width: '50%', padding: '20px'}} src='./../../assets/palace.jpg'/>
        <img style={{height: '500px', width: '50%', padding: '20px', float: 'right'}} src='./../../assets/sf.jpg'/>
      </div>
    );
  }
}
