import { useState } from "react";
import styled from "styled-components";
import holographicHand from "../../assets/images/holographic_wall_display.png";
import colorfulCharacter from "../../assets/images/colorful_character.png";
import SeeMore from "../SeeMore";
import minus from "../../assets/images/minus.png";
import arrowRight from "../../assets/images/right-arrow-black.png";
import arrowDown from "../../assets/images/arrow-down-black.png";
import { Link } from "react-scroll";

const Hero = () => {
  const [isScaled, setIsScaled] = useState(false);

  const hoverEffectHandler = () => {
    setIsScaled(!isScaled);
  };

  return (
    <HeroStyled>
      <HeroLeftStyled>
        <div className="page">
          <img src={minus} alt="horizontal line" />
          <p>01</p>
        </div>

        <Link className="link" to="smile">
          <img src={arrowDown} alt="arrow to the right" />
        </Link>
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

      <SeeMore arrowRight={arrowRight} padding={2} />

      <div className="bottom">
        {!isScaled && (
          <img
            onMouseOver={hoverEffectHandler}
            className="imgLeft"
            src={holographicHand}
            alt="holographic hands"
          />
        )}

        {!isScaled && (
          <img
            onMouseLeave={hoverEffectHandler}
            className="imgRight-hover"
            src={colorfulCharacter}
            alt="colorful character"
          />
        )}

        {isScaled && (
          <img
            onMouseLeave={hoverEffectHandler}
            className="imgLeft-hover"
            src={holographicHand}
            alt="holographic hand"
          />
        )}
        {isScaled && (
          <img
            onMouseOver={hoverEffectHandler}
            className="imgRight"
            src={colorfulCharacter}
            alt="colorful character"
          />
        )}
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
    ". box2 box2 box2"
    ". box4 box4 box3"
    "box1 box6 box6 box6";

  .link {
    width: 2rem;
  }

  .page {
    display: flex;
    gap: 0.5rem;
  }

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
    line-height: 1.4;
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

    .imgLeft-hover {
      width: 50%;
      height: 100%;
      box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.25);
      transform: scale(1.2);
      transition: transform 0.5s ease;
      transition-duration: 2s;
      transition-delay: 0.5s;
    }

    .imgRight-hover {
      width: 45.5%;
      height: 100%;
      box-shadow: 0px 8px 4px rgba(0, 0, 0, 0.25);
      transform: scale(1.2);
      transition: transform 0.5s ease;
      transition-duration: 2s;
      transition-delay: 0.5s;
    }
  }
`;

const HeroLeftStyled = styled.section`
  grid-area: box1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  p {
    font-size: 1.5rem;
    font-weight: lighter;
  }

  img {
    width: 2rem;
   
  }
`;

export default Hero;
