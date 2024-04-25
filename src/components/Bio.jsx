import React from 'react';
import { MdVerified } from "react-icons/md";
import Photo from '../assets/me.jpg'

function Bio() {
  return (
    <div className='bio'>
        <div className="img">
            <img src={Photo} alt="" id='me'/>
            <div className="Xujfc">
                <h4>Ajay S<MdVerified id='verf'/></h4>
                <p>joined the world 21 years ago</p>
            </div>
        </div>
        <div className="description"><p>Skilled FrontEnd Developer adept in HTML, CSS, JavaScript, and React JS, eager to contribute to the
 team by crafting engaging, intuitive websites for an optimal user experience.</p></div>
        <div className="links">
            <p>I am so into opensource software and it's idealogy. I am more into simplicity, I perfer my software to more simple and easy to use.</p>
        </div>
    </div>
  )
}

export default Bio