import React from "react";

import styled from "styled-components";
import bgMarble from "../../assets/images/marble_image.png";

import Navbar from "../Navbar";
import Hero from "./Hero";
import Smile from "./Smile";
import AboutExhibitions from "./AboutExhibitions";
import Footer from "../Footer";
import Booking from './Booking'

const Main = () => {
  return (
    <MainWrapperStyled>
      <div className="header-hero-bg">
        <Navbar />
        <Hero />
      </div>
      <Smile />
      <AboutExhibitions />

      <div className="booking-footer-bg">
      <Booking />
      <Footer />
      </div>
    </MainWrapperStyled>
  );
};

const MainWrapperStyled = styled.div`

  .header-hero-bg {
    background-image: url(${bgMarble});
    background-repeat: no-repeat;
    background-position: center -30px;
    background-size: stretch;

    min-height: 58rem;
    
  }

  .booking-footer-bg{
    background-image: url(${bgMarble});
    background-repeat: no-repeat;
    background-position: center 30px;
    background-size: stretch;

    min-height: 58rem;
  }
`;

export default Main;
