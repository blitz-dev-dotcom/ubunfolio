import React from 'react'

function Body() {
    const date = new Date();
    const currentDate = date.getDate();
  return (
    <div className='body'>
        <p className='date'>Today is, {date.day} {currentDate}</p>
    </div>
  )
}

export default Body