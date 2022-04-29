import React from "react";
import { Link } from "react-scroll";

const LeftPage = (props) => {
  const page = props.pageNumber;

  return (
    <>
      {page === "2" || page === "3" ? (
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
      ) : page === "4" ? (
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
      ) : (
        <div>
          <div></div>

          <div className="page">
            <div className="horizontal-line"></div>
            <p>{props.pageNumber}</p>
          </div>

          <Link className="link" to={props.link} className="arrow-down-icon">
            <img src={props.arrowDown} alt="arrow to the right" />
          </Link>
        </div>
      )}
    </>
  );
};

export default LeftPage;
