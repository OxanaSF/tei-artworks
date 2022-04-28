import React from "react";

import styled from "styled-components";
import bgMarble from "../../assets/images/marble_image.png";

import Navbar from "../Navbar";
import Hero from "./Hero";
import Smile from "./Smile";
import AboutExhibitions from "./AboutExhibitions";
import Footer from "../Footer";
import Booking from "./Booking";
import Modal from '../../components/Main/Modal'

const Home = () => {
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


      <Modal />


    </MainWrapperStyled>
  );
};

const MainWrapperStyled = styled.div`
  .header-hero-bg {
    background-image: url(${bgMarble});
    background-repeat: no-repeat;
    background-position: center -10px;
    background-size: stretch;

    min-height: 58rem;
  }

  .booking-footer-bg {
    background-image: url(${bgMarble});
    background-repeat: no-repeat;
    background-position: center -5px;
    background-size: stretch;

    min-height: 58rem;
  }
`;

export default Home;
