import React from 'react'
import { IoLogoReact } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";
import { FaGit } from "react-icons/fa";
import { BiLogoFirebase } from "react-icons/bi";
function Skills() {
    const progress = [
        {
            name:"React",
            icon: <IoLogoReact id='proic'/>,
            width:'85%'
        },
        {
            name:"JavaScript",
            icon: <IoLogoJavascript id='proic'/>,
            width:'90%'
        },
        {
            name:"TypeScript",
            icon: <TbBrandTypescript id='proic'/>,
            width:'70%'
        },
        {
            name:"Git",
            icon: <FaGit id='proic'/>,
            width:'72%'
        },
        {
            name:"FireBase Auth",
            icon: <BiLogoFirebase id='proic' />,
            width:'70%'
        }
    ]
    
  return (
    <div className='skills'>
        <ul>
            {progress.map((item,index)=>{
                const progressstyle = {
                    width:`${item.width}`
                }
                return(
                    <li className='skili'>
                        <div className="pro" key={index}>
                            {item.icon}
                            <h4>{item.name}</h4>
                        </div>
                        <div className="progress">
                            <div className="progresscolor" style={progressstyle}><sup>{item.width}</sup></div>
                        </div>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Skills