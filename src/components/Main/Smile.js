import styled from "styled-components";
import arrowRight from "../../assets/images/right-arrow-yellow.png";
import SeeMore from "../SeeMore";
import arrowDown from "../../assets/images/down-arrow-yellow.png";
import ExhibitColorful from "../../assets/images/exhibit_colorful.png";
import ColorfulDisplay from "../../assets/images/colorful_displays2.png";
import home from "../../assets/images/home-yellow.png";
import { Link } from "react-scroll";

const Smile = (props) => {
  return (
    <SmileStyled id="smile">
      <SmileLeftStyled>
        <img
          src={home}
          alt="home icon"
          className="home-icon"
          onClick={props.scrollTop}
        />

        <div className="page">
          <div className="horizontal-line"></div>
          <p>{"02"}</p>
        </div>

        <Link className="link" to={"exhibitions"} className="arrow-down-icon">
          <img src={arrowDown} alt="arrow to the right" />
        </Link>
      </SmileLeftStyled>

      <h2>Smile</h2>
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
        <img className="imgLeft" src={ExhibitColorful} alt="exhibit colorful" />

        <img className="imgRight" src={ColorfulDisplay} alt="display faces" />
      </div>
    </SmileStyled>
  );
};

const SmileStyled = styled.section`
  height: 58rem;
  background-color: #ec5959;
  color: #ffe600;

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
    font-weight: lighter;
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
`;

const SmileLeftStyled = styled.section`
  grid-area: box1;

  .horizontal-line {
    width: 3.5rem;
    border-bottom: 1.6px solid #ffe600;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  p {
    font-size: 1.7rem;
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

export default Smile;
