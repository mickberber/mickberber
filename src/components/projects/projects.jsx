import React, { Component } from 'react';
import LogoWall from './wall';
import GilsonWall from './gilsonWall';
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
        <ReChatWall />
        <TinnrWall background='tinnrBackground' wall='tinnrStructure' />
        <McTestingWall />
        <ChutteWall />
        <SocialWall />
        <LogoWall />
      </div>
    )
}

export default Projects;
