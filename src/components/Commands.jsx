import React, { useState , useRef, useEffect } from 'react';
import { FaCodeBranch } from "react-icons/fa";
import { VscExtensions } from "react-icons/vsc";

function Commands(props) {
    const {setReceiveCommand} = props;
    const commandRef = useRef();
    function childTOParent(e){
        if(e.keyCode === 13){
            setReceiveCommand(commandRef.current.value);
            commandRef.current.value = '';
        }
        else{
            return null
        }
    }
    useEffect(()=>{
        commandRef.current.focus();
    },[])
  return (
    <div className='commands'>
        <div className="path">
            <div className="pathname flex"><VscExtensions id='ico' /><p id='p'>developedbyajay</p></div>
            <div className="extend flex"><FaCodeBranch id='ico' /><p id='p'>portfolio</p></div>
        </div>
        <label htmlFor=""><h1>$</h1>
        <input 
            type="text" 
            placeholder='try ls , skills , about , bio , contact ...'
            ref={commandRef}
            // value={command}
            // onChange={(e)=>{setcommand(e.target.value)}}
            className='com'
            onKeyDown={childTOParent}
            />
        </label>
    </div>
  )
}

export default Commands