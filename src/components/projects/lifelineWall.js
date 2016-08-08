import React, { Component } from 'react';

const gilsonStructure = {
  position: 'relative',
	height: '800px',
	width: '100%',
	zIndex: '1',
  background: 'url("./../assets/wallAssets/lifeline.png")',
	backgroundAttachment: 'scroll',
	backgroundPosition: 'center',
  'backgroundRepeat': 'no-repeat'
}

const gilsonText = {
  color: 'white',
  fontSize: '30px',
  textAlign: 'center'
}

const LifelineWall = () => {
    return (
      <div style={gilsonStructure}>
          <div className='row'>
            <div className='col-xs-3 col-md-2' />
            <div className='col-xs-12 col-md-8'>
            </div>
            <div className='col-xs-3 col-md-2' />
          </div>
      </div>
    );
}

export default LifelineWall;
