import { useState } from "react";
import styled from "styled-components";
import LeftScroll from "../LeftScroll";
import SeeMore from "../SeeMore";
import ExhibitionChairs from "../../assets/images/exhibition_w_chairs.png";
import DisplayFaces from "../../assets/images/displays_of_faces.png";
import SmallFace from "../../assets/images/small_face_frame.png";
import ArrowPointRight from "../../assets/images/right-arrow-white.png";

const AboutExhibitions = () => {
  const [isScaled, setIsScaled] = useState(false);

  const hoverEffectHandler = () => {
    setIsScaled(!isScaled);
  };

  return (
    <ExhibitionsSectionStyled>
      <ExhibitionsLeftStyled>
        <LeftScroll number={3} />
      </ExhibitionsLeftStyled>

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

      <SeeMore arrowRight={ArrowPointRight} />

      <div className="bottom">
        <img
          className="imgLeft"
          src={ExhibitionChairs}
          alt="exhibition-chairs"
        />

        <div className="img-wrapper">
          <img
            src={SmallFace}
            alt="small-face"
            className="imgMidle"
            alt="display-faces"
          />

          <img className="imgRight" src={DisplayFaces} alt="display-faces" />
        </div>
      </div>
    </ExhibitionsSectionStyled>
  );
};

const ExhibitionsLeftStyled = styled.section`
  grid-area: box1;

  img {
    width: 2rem;
    position: absolute;
    bottom: 20%;
    left: 5%;
    color: #e8e6d9;
  }
`;

const ExhibitionsSectionStyled = styled.section`
  height: 58rem;
  background-color: #161616;
  color: #e8e6d9;

  display: grid;
  grid-template-rows: 10% 20% 40%;
  gap: 3rem;
  grid-template-columns: 1fr 2fr 2fr 1fr;
  grid-template-areas:
    "box1 box2 box2 box2"
    "box1 box4 box4 box3"
    "box1 box6 box6 box6";

  h2 {
    grid-area: box2;
    font-weight: bold;
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
    justify-content: space-between;
    align-items: center;

    .imgLeft {
      width: 50%;
      width: 570px;
      height: 110%;
      height: 434px;

      box-shadow: -8px 8px 4px rgba(0, 0, 0, 0.25);
    }

    .img-wrapper {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
    }

    .imgMidle {
      width: 20%;
      width: 189px;
      height: 50%;
      height: 238px;
      grid-column: 2 / span 4;
      grid-row: 4 / span 2;
      z-index: 1;
    }

    .imgRight {
      width: 30%;
      width: 393px;
      height: 120%;
      height: 520px;
      box-shadow: -8px 8px 4px rgba(0, 0, 0, 0.25);
      grid-column: 5 / span 12;
      grid-row: 2 / span 25;
    }
  }
`;

export default AboutExhibitions;
