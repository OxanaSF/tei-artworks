import React from 'react'
import styled from "styled-components";
import manPaintingImg from "..//../assets/images/man_painting.png";


const Booking = () => {
  return (
    <BookingStyled>
        <div>Page</div>
        <div className="man-painting"></div>
        <div className="bookings">
          <h2>Bookings</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            molestias eligendi veritatis labore optio, provident corrupti neque.
          </p>
          <div className="contact-me">Contact Me</div>
        </div>
      </BookingStyled>
  )
}


const BookingStyled = styled.section`

    /* min-height: 80vh; */
    display: flex;
    gap: 3.5rem;
    justify-content: center;
    align-items: center;
    margin: 2rem 8rem 2rem 0rem;
  

  .man-painting {
    background-image: url(${manPaintingImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 40rem;
    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);
    
  }

  p {
    line-height: 1.3;
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    font-weight: 100;
  }

  .bottom {
    min-height: 20vh;
    display: flex;
  }

  .bookings {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin: 0rem 2rem 0rem 5rem;
    h2 {
      font-size: 3.4rem;
    }
  }
`;



export default Booking