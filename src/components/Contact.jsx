import React from 'react';
import { GrGithub } from "react-icons/gr";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";

function Contact() {
  return (
    <div className='contact'>
        <div className='github flex'>
            <GrGithub id='conic'/><a href='https://github.com/blitz-dev-dotcom'>Github</a>
        </div>
        <div className='linkedin flex'>
            <CiLinkedin id='conic'/><a href='https://www.linkedin.com/in/ajay-s-828263252/'>Linked in</a>
        </div>
        <div className='mail flex'>
            <MdOutlineAlternateEmail id='conic'/><a href='mailto:devbyajay@gmailcom'>devbyajay@gmailcom</a>
        </div>
        <div className='phone flex'>
            <FaPhone id='conic'/><a href="tel:+919345725071">+91 9345725071</a>
        </div>
        <div className='projects flex'>
            <GrProjects id='conic'/><a href="https://porttfolioajay.netlify.app">projects</a>
        </div>
    </div>
  )
}

export default Contact