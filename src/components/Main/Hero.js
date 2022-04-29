import { useState } from "react";
import styled from "styled-components";
import holographicHand from "../../assets/images/holographic_wall_display.png";
import colorfulCharacter from "../../assets/images/colorful_character.png";
import SeeMore from "../SeeMore";
import arrowRight from "../../assets/images/right-arrow-black.png";
import arrowDown from "../../assets/images/down-arrow-black.png";
import LeftPage from "./LeftPage";

const Hero = () => {
  const [isScaled, setIsScaled] = useState(false);

  const [initialScale, setInitialScale] = useState(true);

  const hoverEffectHandler = (props) => {
    setIsScaled(!isScaled);
  };

  return (
    <HeroStyled initialScale={initialScale}>
      <HeroLeftStyled>
        <LeftPage
          pageNumber={"02"}
          link={"exhibitions"}
          arrowDown={arrowDown}
        />
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

      <div
        className="bottom"
        onMouseEnter={() => {
          setInitialScale(false);
        }}
        onMouseLeave={() => {
          setInitialScale(true);
        }}
      >
        <img
          className="imgLeft"
          src={holographicHand}
          alt="holographic hands"
        />

        <img
          className="imgRight"
          src={colorfulCharacter}
          alt="colorful character"
        />
      </div>
    </HeroStyled>
  );
};

const HeroStyled = styled.section`
  overflow-x: hidden;
  display: grid;
  height: 58rem;
  grid-template-rows: 10% 19% 40% 10%;
  gap: 3rem;
  margin-bottom: -3.5rem;
  /* gap: auto; */

  grid-template-columns: 1fr 2fr 2fr 1fr;
  grid-template-areas:
    "box1 box2 box2 box2"
    "box1 box4 box4 box3"
    "box1 box6 box6 box6"
    "box1 . . .";

  .link {
    width: 2rem;
  }

  .page {
    display: flex;
    align-items: center;
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

    .imgLeft {
      width: 50%;
      height: 100%;
      box-shadow: -8px 8px 4px rgba(0, 0, 0, 0.25);
      transition: transform 0.5s ease;
      z-index: 1;
    }

    .imgRight {
      width: 50%;
      height: 100%;

      transform: ${({ initialScale }) => initialScale && "scale(1.2)"};
      box-shadow: -8px 8px 4px rgba(0, 0, 0, 0.25);
      transition: transform 0.5s ease;
      z-index: ${({ initialScale }) => (initialScale ? "2" : "1")};
    }

    .imgLeft:hover,
    .imgRight:hover {
      width: 50%;
      height: 100%;
      box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.25);
      transform: scale(1.2);
      transition: transform 0.5s ease;
      z-index: 2;
    }
  }
`;

const HeroLeftStyled = styled.section`
  grid-area: box1;

  .horizontal-line {
    width: 3.5rem;
    border-bottom: 1.6px solid black;
  }

  padding: 1rem 0rem;

  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  p {
    font-size: 1.7rem;
    font-weight: lighter;
  }

  .arrow-down-icon {
    img {
      width: 2rem;
      margin-left: 4rem;
      margin-bottom: 2rem;
      cursor: pointer;
    }
  }
`;

export default Hero;
