import React from 'react';
import Project from './Project.jsx';
import '../styles/Projects.css';

const Projects = () => {
  const projectsInfo = {
    one: {
      name: 'FurEver Home',
      desc: 'The FurEverHome app offers a holistic solution aimed at tackling the issues individuals encounter when trying to adopt animals from nearby animal shelters, rescue groups, or private pet owners. The central concept involves developing an easy-to-use and instinctive platform that effectively links potential pet adopters with their perfect animal companions.',
      githubLink: 'https://github.com/meghnaaallam/FurEverHome.git',
      techs: ['JavaFX', 'OOPs', 'MySQL'],
      isOpenSource: false
    },
    two: {
      name: 'Revive',
      desc: 'Developed a full stack web application that allows users to journal their thoughts on an everyday basis. It also provides motivational quotes, daily affirmations, focus state and other resources for good mental health',
      githubLink: 'https://github.com/meghnaaallam/Revive.git',
      techs: ['React', 'Node', 'MongoDB','Express.js', 'Redux', 'SASS'],
      isOpenSource: false
    },
    three: {
      name: 'Workout Buddy',
      desc: 'A Full stack application to track your workouts',
      githubLink: 'https://github.com/meghnaaallam/workout-buddy.git',
      techs: ['React', 'Node', 'MongoDB', 'TailWind CSS', 'Redux'],
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
