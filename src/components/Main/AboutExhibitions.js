import { useState } from "react";
import styled from "styled-components";
import SeeMore from "../SeeMore";
import ExhibitionChairs from "../../assets/images/exhibition_w_chairs.png";
import DisplayFaces from "../../assets/images/displays_of_faces.png";
import SmallFace from "../../assets/images/small_face_frame.png";
import ArrowPointRight from "../../assets/images/right-arrow-white.png";
import arrowDown from "../../assets/images/down-arrow-white.png";
import home from "../../assets/images/home-white.png";
import { Link } from "react-scroll";

const AboutExhibitions = (props) => {
  const [isScaled, setIsScaled] = useState(false);

  return (
    <ExhibitionsStyled id="exhibitions">
      <ExhibitionsLeftStyled>
        <img
          src={home}
          alt="home icon"
          className="home-icon"
          onClick={props.scrollTop}
        />

        <div className="page">
          <div className="horizontal-line"></div>
          <p>{"03"}</p>
        </div>

        <Link className="link" to={"bookings"} className="arrow-down-icon">
          <img src={arrowDown} alt="arrow to the right" />
        </Link>
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
          onClick={() => {
            props.setOpenModal(true);
          }}
          className="imgLeft"
          src={ExhibitionChairs}
          alt="exhibition chairs"
        />

        <div className="img-wrapper">
          <img
            src={SmallFace}
            alt="small face"
            className="imgMidle"
            alt="display faces"
          />

          <img className="imgRight" src={DisplayFaces} alt="display faces" />
        </div>
      </div>
    </ExhibitionsStyled>
  );
};

const ExhibitionsLeftStyled = styled.section`
  grid-area: box1;

  .horizontal-line {
    width: 3.5rem;
    border-bottom: 1px solid #e8e6d9;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  p {
    font-size: 1.5rem;
    font-weight: lighter;
  }

  .home-icon {
    width: 3rem;
    margin-left: 3.5rem;
  }
  img {
    width: 2rem;
    margin-left: 4rem;
    margin-bottom: 2rem;
    cursor: pointer;
  }
`;

const ExhibitionsStyled = styled.section`
  height: 58rem;
  background-color: #161616;
  color: #e8e6d9;

  display: grid;
  padding-top: 3rem;
  grid-template-rows: 10% 20% 40%;
  gap: 3rem;
  grid-template-columns: 1fr 2fr 2fr 1fr;
  grid-template-areas:
    "box1 box2 box2 box2"
    "box1 box4 box4 box3"
    "box1 box6 box6 box6"
    "box1 . . . ";

  .link {
    width: 2rem;
  }

  .page {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  h2 {
    grid-area: box2;

  }

  .text {
    grid-area: box4;
    display: flex;
    margin-right: 10rem;
    font-size: 1.5rem;
    font-weight: normal;
    line-height: 1.5;
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
      width: 52%;
      /* width: 570px; */
      height: 10%;
      height: 27.125rem;
      box-shadow: -8px 8px 4px rgba(0, 0, 0, 0.25);
    }

    .imgLeft:hover {
      cursor: pointer;
    }

    .img-wrapper {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
    }

    .imgMidle {
      width: 20%;
      width: 11.813rem;
      height: 50%;
      height: 14.875rem;
      grid-column: 2 / span 4;
      grid-row: 4 / span 2;
      z-index: 1;
    }

    .imgRight {
      width: 24.563rem;
      height: 120%;
      height: 32.5rem;
      box-shadow: -8px 8px 4px rgba(0, 0, 0, 0.25);
      grid-column: 5 / span 12;
      grid-row: 2 / span 25;
    }
  }
`;

export default AboutExhibitions;
