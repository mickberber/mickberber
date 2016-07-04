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
          <div style={{marginLeft:'25px'}}>I have a really cool dog</div>
          <div style={{marginRight: '25px', float:'right'}}>And I cook a little bit...</div>
        </div>
        <img style={{height: '500px', width: '50%', padding: '20px'}} src='./../../assets/IMG_0925.JPG'/>
        <img style={{height: '500px', width: '50%', padding: '20px', float: 'right'}} src='./../../assets/food.JPG'/>
        <div style={{height: '100px'}}/>
        <div className='row'>
          <div style={{marginLeft:'25px'}}>I'm a red</div>
          <div style={{marginRight: '25px', float:'right'}}>YNWA</div>
        </div>
        <img style={{height: '500px', width: '50%', padding: '20px'}} src='./../../assets/lfc.jpg'/>
        <img style={{height: '500px', width: '50%', padding: '20px', float: 'right'}} src='./../../assets/lfc2.JPG'/>
        <div style={{height: '100px'}}/>
        <div className='row'>
          <div style={{marginLeft:'25px'}}>The GOAT, my all time favorite</div>
          <div style={{marginRight: '25px', float:'right'}}>I'm green and gold</div>
        </div>
        <img style={{height: '500px', width: '50%', padding: '20px'}} src='./../../assets/HENDERSON.JPG'/>
        <img style={{height: '500px', width: '50%', padding: '20px', float: 'right'}} src='./../../assets/oak.JPG'/>
        <div style={{height: '100px'}}/>
        <div className='row'>
          <div style={{marginLeft:'25px'}}>Black and Blue in my veins</div>
          <div style={{marginRight: '25px', float:'right'}}>Mmmm... a comeback</div>
        </div>
        <img style={{height: '500px', width: '50%', padding: '20px'}} src='./../../assets/avaya.JPG'/>
        <img style={{height: '500px', width: '50%', padding: '20px', float: 'right'}} src='./../../assets/gordon.JPG'/>
        <div style={{height: '100px'}}/>
        <div className='row'>
          <div style={{marginLeft:'25px'}}>And I take some decent photos</div>
        </div>
        <img style={{height: '500px', width: '50%', padding: '20px'}} src='./../../assets/palace.JPG'/>
        <img style={{height: '500px', width: '50%', padding: '20px', float: 'right'}} src='./../../assets/sf.JPG'/>
      </div>
    );
  }
}
