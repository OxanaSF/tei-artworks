import React from 'react'
import styled from "styled-components";
import arrowRight from '../../assets/images/right-arrow-yellow.png'
import SeeMore from "../SeeMore";
import LeftScroll from '../LeftScroll';

import ExhibitColorful from '../../assets/images/exhibit_colorful.png'
import ColorfulDisplay from '../../assets/images/colorful_displays2.png'

const Smile = () => {
  return (
    <SmileStyled>
      
      <SmileLeftStyled>
        <LeftScroll number={3} />
      </SmileLeftStyled>

      <h2>Exhibitions</h2>
      <div className="text">
        <div className="paragraph1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
          hic molestiae quia?
        </div>
        <div className="paragraph2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
          unde voluptas natus vel!
        </div>
      </div>

      <SeeMore arrowRight={arrowRight} />

      <div className="bottom">
        <img
          className="imgLeft"
          src={ExhibitColorful}
          alt="exhibit-colorful"
        />

    
        <img
          className="imgRight"
          src={ColorfulDisplay}
          alt="display-faces"
        />
      </div>

    </SmileStyled>
  )
}


const SmileStyled = styled.section`
height: 58rem;
background-color: #EC5959;
color: #FFE600;


display: grid;
  grid-template-rows: 10% 20% 40%;
  gap: 3rem;
  grid-template-columns: 1fr 2fr 2fr 1fr;
  grid-template-areas:
    "box1 box2 box2 box2"
    "box1 box4 box4 box3"
    "box1 box6 box6 box6";

  h1 {
    grid-area: box2;
    font-weight: bold;
    font-size: 5rem;
  }

  .text {
    grid-area: box4;
    display: flex;
    margin-right: 10rem;
    font-size: 1.5rem;
    font-weight: lighter;
  }

  .arrow-right {
    grid-area: box3;
    margin-left: auto;

    img {
      width: 2rem;
    }
  }

  .bottom {
    grid-area: box6;
    display: flex;

    .imgLeft {
      width: 50%;
      height: 100%;
      box-shadow: -8px 8px 4px rgba(0, 0, 0, 0.25);
    }

    .imgRight {
      width: 45.5%;
      height: 100%;
      box-shadow: -8px 8px 4px rgba(0, 0, 0, 0.25);
      transform: scale(1.2);

    }
  }

  
`

const SmileLeftStyled = styled.section`
  grid-area: box1;

  img {
    width: 2rem;
    position: absolute;
    bottom: 20%;
    left: 5%;
  }
`;


export default Smile