import React from 'react';
import { BsHexagonHalf } from "react-icons/bs";

function Header() {
  return (
    <div className='header'>
        <div className="color flex">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className="username flex">
            <BsHexagonHalf />
            <p>developedbyajay/portfolio</p>
        </div>
    </div>
  )
}

export default Header