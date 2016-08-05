import React, { Component } from 'react';

/* ReChat Wall Attributes */

const reChatStructure = {
  position: 'relative',
	height: '800px',
	width: '100%',
	zIndex: '1',
	background: 'url("./../src/assets/wallAssets/rechat.png")',
	backgroundAttachment: 'scroll',
	backgroundPosition: 'center',
  backgroundSize: 'cover'
}

const ReChatWall = () => {
    return (
      <div style={reChatStructure}>
          <div className='row'>
            <div className='col-xs-4 col-md-3 dropTopLrg'>
                <div style={{fontSize: '25px', marginLeft: '40px'}}>
                  Tutorial written for React, Horizon and Webpack
                  <a href='https://medium.com/front-end-hacking/react-webpack-and-horizon-quick-start-b9335c1ece53#.vawif2uba'>{'\n'}Viewable Here</a>
                </div>
                <img style={{width: '300px', height: '100px'}} src='./src/assets/horizon.png'></img>
            </div>
            <div className='col-xs-2 col-md-1' />
            <div className='col-xs-12 col-md-8'>
            </div>
          </div>
      </div>
    );
}

export default ReChatWall;
