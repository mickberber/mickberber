import React, { Component } from 'react';
import { Link } from 'react-router';

let style = {
  position: 'relative',
	height: '720px',
	width: '100%',
	zIndex: '1',
  background: 'url("./../src/assets/mblogo.png")',
	backgroundAttachment: 'scroll',
	backgroundPosition: 'center',
  backgroundSize: 'cover'
}

const HomeWall = () =>  {
    return (
      <div style={style}>
          <div className='row row-eq-height'>
            <div className='col-xs-3 col-md-2' />
              <div className='col-xs-12 col-md-8 center' style={{height: '620px'}}>
              </div>
            <div className='col-xs-3 col-md-2' />
          </div>
      </div>
    )
}

export default HomeWall;
