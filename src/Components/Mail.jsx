import React from 'react'

import { AiFillInstagram, AiFillGithub, AiOutlineMail, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai'

import '../styles/Socials.css';

const Socials = () => {
  return (
    <div className='socials'>
      <h2>Connect with me here!</h2>
      <div className="social">
        <div className='mail'>
          <AiOutlineMail />
          <p>Mail</p>
         <a href="mailto:allam.me@northeastern.edu" rel='noreferrer'></a>
         
        </div>
        <div className='git'>
          <AiFillGithub />
          <p>Github</p>
          <a href="https://github.com/meghnaaallam" target='_blank' rel='noreferrer'></a>
        </div>
        <div className='link'>
          <AiFillLinkedin />
          <p>Linkedin</p>
          <a href="https://www.linkedin.com/in/meghnareddyallam/" target='_blank' rel='noreferrer'></a>
        </div>
      </div>
    </div>
  )
}


export default Socials;
