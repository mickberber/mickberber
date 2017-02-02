import React, { Component } from 'react';

const lifelineStructure = {
  position: 'relative',
	height: '800px',
	width: '100%',
	zIndex: '1',
  background: 'url("./../assets/wallAssets/lifeline.png")',
  backgroundColor: 'black',
	backgroundAttachment: 'scroll',
	backgroundPosition: 'right',
  'backgroundRepeat': 'no-repeat'
}

const lifelineText = {
  color: 'white',
  fontSize: '30px',
  textAlign: 'center'
}

let picDefault = {height: '200px', padding: '20px', margin: '10px'};


const LifelineWall = () => {
    return (
      <div style={lifelineStructure}>
          <div className='row'>
            <div className='col-xs-12 col-md-8' style={lifelineText}>
              <img style={picDefault} src='./../assets/wallAssets/attshape.png' />
            </div>
            <div className='col-xs-3 col-md-2' />
            <div className='col-xs-3 col-md-2' />
          </div>
      </div>
    );
}

export default LifelineWall;
