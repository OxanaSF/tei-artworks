import React from "react";
import styled from "styled-components";
import bgMarble from "../../assets/images/marble_image.png";
import { useState } from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Smile from "./Smile";
import AboutExhibitions from "./AboutExhibitions";
import Footer from "../Footer";
import Booking from "./Booking";
import Modal from "./ModalExhibitions";

const Home = (props) => {
  const [openModal, setOpenModal] = useState(false);

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {openModal && <Modal setOpenModal={setOpenModal} />}

      <MainWrapperStyled>
        <div className="header-hero-bg">
          <Navbar />
          <Hero />
        </div>

        <Smile scrollTop={scrollTop} />
        <AboutExhibitions setOpenModal={setOpenModal} scrollTop={scrollTop} />

        <div className="booking-footer-bg">
          <Booking scrollTop={scrollTop} />
          <Footer />
        </div>
      </MainWrapperStyled>
    </>
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
