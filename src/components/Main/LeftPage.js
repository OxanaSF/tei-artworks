import React from "react";
import { Link } from "react-scroll";

const LeftPage = (props) => {
  const homeLength = props.home.length !== 0;
  const arrowLength = props.arrowDown.length !== 0;

  return (
    <>
      {homeLength && arrowLength ? (
        <div>
          <img
            src={props.home}
            alt="home icon"
            className="home-icon"
            onClick={props.scrollTop}
          />

          <div className="page">
            <div className="horizontal-line"></div>
            <p>{props.pageNumber}</p>
          </div>

          <Link className="link" to={props.link} className="arrow-down-icon">
            <img src={props.arrowDown} alt="arrow to the right" />
          </Link>
        </div>
      ) : homeLength ? (
        <div>
          <div></div>
          <img
            src={props.home}
            alt="home icon"
            className="home-icon"
            onClick={props.scrollTop}
          />

          <div className="page">
            <div className="horizontal-line"></div>
            <p>{props.pageNumber}</p>
          </div>
        </div>
      ) : (
        <div>
          <img
            src={props.home}
            alt="home icon"
            className="home-icon"
            onClick={props.scrollTop}
          />

          <div className="page">
            <div className="horizontal-line"></div>
            <p>{props.pageNumber}</p>
          </div>

          <div></div>
        </div>
      )}
    </>
  );
};

export default LeftPage;
