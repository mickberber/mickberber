import React, { Component } from 'react';
import CN from 'classnames';

export default class ReChatWall extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const classesWall = CN(this.props.wall, this.props.background);
    return (
      <div className={classesWall}>
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
    )
  }
}
