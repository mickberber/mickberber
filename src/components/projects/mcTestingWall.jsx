import React, { Component } from 'react';

/* McTesting.js Wall Attributes */

const mcTestingStructure = {
  position: 'relative',
	height: '800px',
	width: '100%',
	zIndex: '1',
	background: 'url("./../src/assets/npmmcTesting.png")',
	backgroundAttachment: 'scroll',
	backgroundPosition: 'center',
  backgroundSize: 'cover'
}

const dropRight = {
  marginTop: '50px',
  textAlign: 'right'
}

const McTestingWall = () => {
    return (
      <div style={mcTestingStructure}>
          <div className='row'>
            <div className='col-xs-3 col-md-2' />
            <div className='col-xs-3 col-md-2' />
            <div className='col-xs-12 col-md-8'>
                <div style={dropRight}>
                  <h3>
                    <a href='https://www.github.com/mickberber/mcTesting'>
                      McTesting.js <img src='./src/assets/GitHub-Mark-32px.png'></img>
                    </a>
                  </h3>
                  <h3>npm install mc-testing</h3>
                </div>
            </div>
          </div>
      </div>
    );
}

export default McTestingWall;
