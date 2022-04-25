import React from 'react'
import styled from "styled-components";
import bgMarble from '../../assets/images/marble_image.png'

const Hero = () => {
  return (
    <NavbarStyled>Hero</NavbarStyled>
  )
}


const NavbarStyled = styled.section`
  height: 58rem;
  background-image: url(${bgMarble});
  background-repeat: no-repeat;
  background-position: center;
`

export default Hero