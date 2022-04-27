import React from 'react'
// import arrowRight from '../assets/images/right-arrow.png'

const SeeMore = (props) => {
  return (
    <div className="arrow-right">
    <p>See more </p>
    <img src={props.arrowRight} alt="arrow-right" />
  </div>
  )
}

export default SeeMore