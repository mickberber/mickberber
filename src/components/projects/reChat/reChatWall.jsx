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
            <div style={{fontSize: '25px'}} className='col-xs-3 col-md-2 dropTopLrg'>
                Tutorial written for React, Horizon and Webpack
                <a href='https://medium.com/front-end-hacking/react-webpack-and-horizon-quick-start-b9335c1ece53#.vawif2uba'>{'\n'}Viewable Here</a>
            </div>
            <div className='col-xs-3 col-md-2' />
            <div className='col-xs-12 col-md-8'>
            </div>
          </div>
      </div>
    )
  }
}