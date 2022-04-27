import React from 'react'
import arrowDown from '../assets/images/down.png'

const LeftScroll = (props) => {
  return (
    <div>
         <p>{props.number}</p>
          <img src={arrowDown} alt="arrow-down " />
    </div>
  )
}

export default LeftScroll