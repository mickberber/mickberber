import React, { Component } from 'react';
import VideoPlayer from './videoPlayer';


/* Chutte Wall Attributes */

const chutteStructure = {
  position: 'relative',
	height: '800px',
	width: '100%',
	zIndex: '1',
	background: 'url("./../src/assets/wallAssets/chuttelogo.png")',
	backgroundAttachment: 'scroll',
	backgroundPosition: 'center',
  backgroundSize: 'cover'
}


const ChutteWall = () => {
    return (
      <div style={chutteStructure}>
          <div className='row'>
            <div className='col-xs-3 col-md-2' />
            <div className='col-xs-12 col-md-8'>
              <VideoPlayer />
              <div style={{textAlign: 'center'}}>
              <a href='http://www.chutte.com'><h3>Chutte.com</h3></a>
              <h3>A reverse auction style marketplace.</h3>
              <img style={{height: '50px', width: '50px'}}src='./../assets/wallAssets/kgbjs.png'/><h4>KGBJS</h4>
                <a href='https://github.com/mickberber'><h5>Myself  <img src='./src/assets/GitHub-Mark-32px.png'></img></h5></a>
                <a href='https://github.com/seanagibson'><h5>Sean Gibson  <img src='./src/assets/GitHub-Mark-32px.png'></img></h5></a>
                <a href='https://github.com/peterkaiserui'><h5>Peter Kaiser  <img src='./src/assets/GitHub-Mark-32px.png'></img></h5></a>
                <a href='https://github.com/beresford211'><h5>Tim Steele  <img src='./src/assets/GitHub-Mark-32px.png'></img></h5></a>
              </div>
            </div>
            <div className='col-xs-3 col-md-2' />
          </div>
      </div>
    )
}

export default ChutteWall;
