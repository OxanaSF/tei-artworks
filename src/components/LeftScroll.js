import React from 'react'
import styled from "styled-components";
// import  horizontLine from '../assets/images/minus.png'


const LeftScroll = (props) => {
  return (
    <LeftScrollStyled>

           <img src={props.minus} alt="horizontal line" />
           <p>{props.number}</p>
    </LeftScrollStyled>
  )
}

const LeftScrollStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    font-size: 1.5rem;
    font-weight: lighter;
  }

`

export default LeftScroll