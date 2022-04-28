import React from 'react'
import styled from "styled-components";
import { Link } from "react-scroll";

const ArrowDown = (props) => {
  return (
    <ArrowDownStyled>
        
        <Link className="link" to="smile"><img src={props.arrowDown} alt="arrow to the right" /></Link>

    </ArrowDownStyled>
  )
}

const ArrowDownStyled = styled.div`
    width: 2rem;

.link{
  /* background-color: transparent;
  border: none; */
}
`
;
export default ArrowDown