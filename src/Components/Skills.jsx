import React from 'react'

import '../styles/Skills.css'

import { DiJava } from "react-icons/di";


import { SiJavascript, SiHtml5, SiCss3, SiReact, SiNodedotjs, SiGit, SiFigma, SiMongodb, SiFirebase, SiTypescript, SiNextdotjs } from 'react-icons/si'

const Skills = () => {
  return (
    <div className='skills'>
      <h2>My Skills</h2>
      <div className="skill">
        <div className="js">
          <SiJavascript />
          <p>JavaScript</p>
        </div>
        <div className="html">
          <SiHtml5 />
          <p>HTML</p>
        </div>
        <div className="css">
          <SiCss3 />
          <p>CSS</p>
        </div>
        <div className="git">
          <SiGit />
          <p>GitHub</p>
        </div>
        <div className="react">
          <SiReact />
          <p>React</p>
        </div>
        <div className="java">
          <DiJava />
          <p>Java</p>
        </div>
        <div className="node">
          <SiNodedotjs />
          <p>Node JS</p>
        </div>
        <div className="mon">
          <SiMongodb />
          <p>MongoDB</p>
        </div>
      </div>
    </div>
  )
}

export default Skills;