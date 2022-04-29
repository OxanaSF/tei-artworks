import React from "react";
import styled from "styled-components";
import manPaintingImg from "../../assets/images/man_painting.png";
import ArrowRightContactMe from "../../assets/images/right-arrow-contact-me.png";
import home from "../../assets/images/home-black.png";


const Booking = (props) => {
  return (
    <BookingStyled id="bookings">
      <BookingLeftStyled>
        <img
          src={home}
          alt="home icon"
          className="home-icon"
          onClick={props.scrollTop}
        />

        <div className="page">
          <div className="horizontal-line"></div>
          <p>{"04"}</p>
        </div>

        <div></div>
      </BookingLeftStyled>

      <div className="man-painting">
        <img src={manPaintingImg} alt="man painting" />
      </div>

      <div className="bookings">
        <h2>Bookings</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          molestias eligendi veritatis labore optio, provident corrupti neque, .
        </p>

        <div className="contact-me">
          <p>Contact Me</p>
          <img src={ArrowRightContactMe} alt="arrow to the right" />
        </div>
      </div>
    </BookingStyled>
  );
};

const BookingStyled = styled.section`
  display: flex;
  padding-top: 2.5rem;
  align-items: center;

  .link {
    width: 2rem;
  }

  .page {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .man-painting {
    img {
      box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);
      height: 650px;

      width: 82%;
    }
  }

  p {
    line-height: 1.4;
    font-family: "Raleway", sans-serif;
    font-size: 1.7rem;
    font-weight: 200;
    letter-spacing: 1px;
  }

  .bottom {
    min-height: 20vh;
    display: flex;
  }

  .bookings {
    padding-right: 4rem;
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    h2 {
      font-size: 3.3rem;
    }

    p {
      font-size: 1.5rem;
      line-height: 1.2;
    }

    .contact-me {
      display: flex;
      gap: 3rem;
      p {
        font-size: 2.5rem;
        font-family: "Raleway", sans-serif;
        letter-spacing: 1px;
        font-weight: 500;
        padding-left: 3.5rem;
      }
      img {
        width: 3rem;
      }
    }
  }
`;

const BookingLeftStyled = styled.section`
  width: 11%;

  .horizontal-line {
    width: 3.5rem;
    border-bottom: 1px solid black;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20rem;

 

  .home-icon {
    width: 3rem;
    margin-left: 3.5rem;
    cursor: pointer;
  }

  img {
    width: 2rem;
    margin-bottom: 2rem;
  }
`;

export default Booking;
