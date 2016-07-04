import React, { Component } from 'react';
import CN from 'classnames';

class McTestingWall extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const classesWall = CN(this.props.wall, this.props.background);;
    return (
      <div className={classesWall}>
          <div className='row'>
            <div className='col-xs-3 col-md-2' />
            <div className='col-xs-3 col-md-2' />
            <div className='col-xs-12 col-md-8'>
                <div className='right dropTopLrg'>
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
    )
  }
}

export default McTestingWall;
