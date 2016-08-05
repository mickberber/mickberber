import React, { Component } from 'react';

/* Logo Wall Attributes */
const logoStructure = {
  position: 'relative',
	height: '720px',
	width: '100%',
	zIndex: '1',
	background: 'url("./../src/assets/mblogo.png")',
	backgroundAttachment: 'scroll',
	backgroundPosition: 'center',
  backgroundSize: 'cover'
}

const bottom = {
	position: 'absolute',
	bottom: '0px',
	width: '100%'
}

const LogoWall = () => {
    return (
      <div style={logoStructure}>
          <div className='row row-eq-height'>
            <div className='col-xs-3 col-md-2' />
              <div className='col-xs-12 col-md-8' style={{height: '620px', textAlign: 'center'}}>
                <div style={bottom}>
                  This site was built with:
                  <img style={{height: '100px', width: '70px'}} src='./../assets/wallAssets/reactjs.png' />
                  And deployed on:
                  <img style={{height: '100px', width: '120px'}} src='./../assets/wallAssets/heroku.png' />
                </div>
              </div>
            <div className='col-xs-3 col-md-2' />
          </div>
      </div>
    );
}

export default LogoWall;
