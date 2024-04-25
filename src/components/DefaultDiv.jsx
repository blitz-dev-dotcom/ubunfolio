import React from 'react';
import { FaCodeBranch } from "react-icons/fa";
import { VscExtensions } from "react-icons/vsc";
import { BsFolderCheck } from "react-icons/bs";

function DefaultDiv(props) {
  return (
    <div className='commands'>
        <div className="path">
            <div className="pathname flex"><VscExtensions id='ico' /><p id='p'>developedbyajay</p></div>
            <div className="extend flex"><FaCodeBranch id='ico' /><p id='p'>portfolio</p></div>
            <div className="pathname flex"><BsFolderCheck id='ico' /><p id='p'>{props.value}</p></div>
        </div>
        <label htmlFor=""><h1>$</h1>
            <div className="com">{props.value}</div>
        </label>
    </div>
  )
}

export default DefaultDiv