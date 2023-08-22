import React from 'react';
import Project from './Project.jsx';
import '../styles/Projects.css';

const Projects = () => {
  const projectsInfo = {
    one: {
      name: 'FurEver Home',
      desc: 'FurEver Home',
      githubLink: 'https://github.com/',
      techs: ['JavaFX', 'OOPs', 'MySQL'],
      isOpenSource: false
    },
    two: {
      name: 'Revive',
      desc: 'congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed',
      githubLink: 'https://github.com/',
      techs: ['React', 'Node', 'MongoDB','Express.js', 'Redux', 'SASS'],
      isOpenSource: false
    },
    three: {
      name: 'Workout Buddy',
      desc: 'congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed',
      githubLink: 'https://github.com/',
      techs: ['React', 'Node', 'MongoDB', 'Socket.io', 'Redux'],
      isOpenSource: false
    }
  }
  return (
    <div className="Projects" id="projects" >
      <h2>My Projects</h2>
      <div>
        <Project info={projectsInfo.one} />
        <Project info={projectsInfo.two} />
        <Project info={projectsInfo.three} />
      </div>
    </div>
  )
}

export default Projects;
