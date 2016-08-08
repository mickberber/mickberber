import React, { Component } from 'react';
import LogoWall from './wall';
import GilsonWall from './gilsonWall';
import LifelineWall from './lifelineWall';
import ChutteWall from './chutteWall';
import SocialWall from './socialWall';
import TinnrWall from './tinnrWall';
import McTestingWall from './mcTestingWall';
import ReChatWall from './reChatWall';
import Nav from './../nav';

const Projects = () => {
    return (
      <div>
        <Nav />
        <GilsonWall />
        <LifelineWall />
        <ReChatWall />
        <TinnrWall />
        <McTestingWall />
        <ChutteWall />
        <SocialWall />
        <LogoWall />
      </div>
    )
}

export default Projects;
