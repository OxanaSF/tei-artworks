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

  return (
    <>
      {openModal && <Modal setOpenModal={setOpenModal} />}

      {/* {!openModal &&  */}
      {/* ( */}
        <MainWrapperStyled>
          <div className="header-hero-bg">
            <Navbar />
            <Hero />
          </div>

          <Smile />
          <AboutExhibitions setOpenModal={setOpenModal} />

          <div className="booking-footer-bg">
            <Booking />
            <Footer />
          </div>
        </MainWrapperStyled>
      {/* )
      } */}
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
