import React from 'react'
import { SiVercel } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { MdCss } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io";

function About() {
  return (
    <div className='about'>
        <div className="why">
            <h3>Why?</h3>
            <p>Terminal's Portfolio is a portfolio style that design to let you go through the portfolio in the terminal way.</p>
        </div>
        <div className="stack">
            <h3>Tech Stack</h3>
            <p>This Site is Purely Written in React js using Javascript and Vercel for deployment</p>
            <div className="icons">
                <IoLogoReact id='techic' />
                <MdCss id='techic'/>
                <SiVercel id='techic' />
                <IoLogoJavascript id='techic'/> 
            </div>
        </div>
    </div>
  )
}

export default About