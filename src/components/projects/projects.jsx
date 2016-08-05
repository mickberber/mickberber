import React, { Component } from 'react';
import LogoWall from './wall';
import GilsonWall from './gilsonWall';
import ChutteWall from './chutteWall';
import SocialWall from './socialWall';
import TinnrWall from './tinnrWall';
import McTestingWall from './mcTestingWall';
import ReChatWall from './reChatWall';
import Nav from './../nav';

class Projects extends Component {
  render() {
    return(
      <div>
        <Nav />
        <GilsonWall />
        <ReChatWall background='reChatBackground' wall='reChatStructure'/>
        <TinnrWall background='tinnrBackground' wall='tinnrStructure' />
        <McTestingWall background='mcTestingBackground' wall='mcTestingStructure' />
        <ChutteWall />
        <SocialWall background='socialBackground' wall='socialStructure' />
        <LogoWall />
      </div>
    )
  }
}

export default Projects;
