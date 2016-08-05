import React, { Component } from 'react';
import CN from 'classnames';

/* Social Flix Wall Attributes */

const socialStructure = {
  position: 'relative',
	height: '800px',
	width: '100%',
	zIndex: '1',
  background: "url('./../src/assets/wallAssets/socialflixss.png')",
	backgroundAttachment: 'scroll',
	backgroundPosition: 'center',
  backgroundSize: 'cover'
}

const SocialWall = () => {
    return (
      <div style={socialStructure}>
          <div className='row'>
            <div className='col-xs-3 col-md-2' />
            <div className='col-xs-3 col-md-2' />
            <div className='col-xs-12 col-md-8'>
                <div className='right dropTopLrg' style={{color: 'white'}}>
                <h3>
                  <a href='http://socialflix.herokuapp.com'>
                    Socialflix <i className="fa fa-film" aria-hidden="true"></i>
                  </a>
                </h3>
                <h4>Via <img style={{height:'50px', width:'100px'}} src='./src/assets//wallAssets/socketio.png'></img></h4>
                <div className='right'>MiddleOutHomeBrewCrew
                  <a href='https://github.com/mickberber'><h5>Myself  <img src='./src/assets/github-32.png' /></h5></a>
                  <a href='https://github.com/ycube'><h5>Yale Yuen  <img src='./src/assets/github-32.png' /></h5></a>
                  <a href='https://github.com/abibbs'><h5>Anthony Bibbs  <img src='./src/assets/github-32.png' /></h5></a>
                  <a href='https://github.com/spiterman'><h5>Sergey Piterman  <img src='./src/assets/github-32.png' /></h5></a>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
}

export default SocialWall;
