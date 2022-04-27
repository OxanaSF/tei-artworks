import { useState } from "react";
import styled from "styled-components";
import holographicHand from "../../assets/images/holographic_wall_display.png";
import colorfulCharacter from "../../assets/images/colorful_character.png";
import SeeMore from "../SeeMore";

import LeftScroll from "../LeftScroll";
import arrowRight from '../../assets/images/right-arrow-black.png'

const Hero = () => {
  const [isScaled, setIsScaled] = useState(false);

  const hoverEffectHandler = () => {
    setIsScaled(!isScaled);
  };




  return (
      <HeroStyled>
        <HeroLeftStyled>
          <LeftScroll number={1}/>
        </HeroLeftStyled>

        <h1>Tei Artworks</h1>
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
          {!isScaled && (
            <img
            onMouseOver={hoverEffectHandler}
              className="imgLeft"
              src={holographicHand}
              alt="holographic-hands"
            />
          )}

          {!isScaled && 
            <img
            onMouseLeave={hoverEffectHandler}
              className="imgRight-hover"
              src={colorfulCharacter}
              alt="colorful-character"
            />
          }

          {isScaled && 
              <img
              onMouseLeave={hoverEffectHandler}
                className="imgLeft-hover"
                src={holographicHand}
                alt="holographic-hand"
              />
          }
              {isScaled  && 
              <img
              onMouseOver={hoverEffectHandler}
                className="imgRight"
                src={colorfulCharacter}
                alt="colorful-character"
              />
            }

        </div>
      </HeroStyled>

  );
};

const HeroStyled = styled.section`
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

    .imgLeft,
    .imgRight {
      width: 50%;
      height: 100%;
      box-shadow: -8px 8px 4px rgba(0, 0, 0, 0.25);
    }
    

    .imgLeft-hover  {
      width: 50%;
      height: 100%;
      box-shadow: -8px 8px 4px rgba(0, 0, 0, 0.25);
      transform: scale(1.2);
      transition: transform 0.5s ease;
      transition-duration: 2s;
      transition-delay: 0.5s;
   
    }

    .imgRight-hover  {
      width: 45.5%;
      height: 100%;
      box-shadow: -8px 8px 4px rgba(0, 0, 0, 0.25);
      transform: scale(1.2);
      transition: transform 0.5s ease;
      transition-duration: 2s;
      transition-delay: 0.5s;
   
    }
  
  }
`;

const HeroLeftStyled = styled.section`
  grid-area: box1;

  img {
    width: 2rem;
    position: absolute;
    bottom: 20%;
    left: 5%;
  }
`;

export default Hero;
