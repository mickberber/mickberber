import React, { Component } from 'react';
//import NavBar from './../navBar';
import Nav from './../nav';

//background styling for whole page
let bgStyle = {height: '100%', width: '100%', objectFit: 'fill', zIndex: '-100', position: 'fixed', opacity: '0.1'};
//default picture stylings
let picDefault = {height: '400px', width: '40%', padding: '20px', margin: '10px',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', backgroundColor: 'white'};
//picture location
let picLocation = './../../assets/gallerypics/';

export default class About extends Component {
  render() {
    return (
      <div>
        <Nav textColor='black' />
        <img style={bgStyle} src={picLocation + 'avaya.jpg'}/>
        <div className='container'>
          <div style={{height: '65px'}} />
          <div style={{fontSize: '700%', textAlign: 'center', fontFamily: 'Gerogia'}}>
            <i className="fa fa-hand-spock-o" aria-hidden="true"></i>
          </div>
          <div style={{height: '25px'}} />
          <div className='row'>
            <img style={{ ...picDefault, height: '500px', width: '80%'}} src={picLocation + 'goofkick.jpg'}/>
          </div>
          <div style={{height: '50px'}} />
          <div className='row'>
            <img style={{ ...picDefault, height: '500px', width: '75%', float: 'right'}} src={picLocation + 'oak.jpg'}/>
          </div>
          <div style={{height: '50px'}} />
          <div className='row'>
            <img style={{ ...picDefault, width: '45%', height: '600px'}} src={picLocation + 'zlatan.jpg'}/>
            <img style={{ ...picDefault, width: '50%'}} src={picLocation +'zlats.jpg'}/>
          </div>
          <div style={{height: '50px'}} />
          <div className='row'>
            <img style={{ ...picDefault, width: '75%', height: '500px', marginLeft: '10%'}} src={picLocation + 'kezar.jpg'}/>
          </div>
          <div style={{height: '50px'}} />
          <div className='row'>
            <img style={picDefault} src={picLocation + 'palace.jpg'}/>
            <img style={{ ...picDefault, width: '55%', float: 'right'}} src={picLocation + 'menbob.jpg'}/>
          </div>
          <div style={{height: '50px'}} />
          <div className='row'>
            <img style={{ ...picDefault, width: '70%', marginLeft: '10%'}} src={picLocation + 'menmalek.jpg'}/>
          </div>
          <div style={{height: '50px'}} />
          <div className='row'>
            <img style={{ ...picDefault, width: '50%', marginTop: '10%'}} src={picLocation + 'gordon.jpg'}/>
            <img style={{ ...picDefault, height: '600px', float: 'right'}} src={picLocation + 'HENDERSON.jpg'}/>
          </div>
          <div style={{height: '50px'}} />
          <div className='row'>
            <img style={{ ...picDefault, width: '50%', marginLeft: '35%'}} src={picLocation + 'whoville.jpg'}/>
          </div>
        </div>
      </div>
    );
  }
}
