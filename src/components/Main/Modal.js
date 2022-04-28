import React from "react";
import styled from "styled-components";
import chairsImg from "../../assets/images/exhibition_w_chairs.png";
import close from "../../assets/images/close.png";
import ranningCharacter from "../../assets/images/big_character.png";

const Modal = () => {
  return (
    <ModalStyled>
      <div className="modal-container">
        <div className="container-left">
          <h1>Left</h1>
        </div>

        <div className="container-right">
          <img className="close" src={close} alt="close" />

          <div className="test">
            <h3>Lorem Ipsum</h3>
            <div className="running-character-bg">
              <img
                className="running-character"
                src={ranningCharacter}
                alt="ranning character"
              />
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
              doloremque nobis.
            </p>
          </div>
          {/* <div></div> */}
        </div>
      </div>
    </ModalStyled>
  );
};

const ModalStyled = styled.section`
  min-height: 58rem;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .modal-container {
    display: flex;
    height: 58rem;
    margin-top: 2rem;
    margin-bottom: 5rem;
  }

  .container-left {
    width: 53%;
    height: 58rem;

    background-image: url(${chairsImg});
    background-repeat: no-repeat;
    background-size: cover;
  }

  .container-right {
    width: 47%;
    background-color: #e8e6d9;

    .test {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 35%;
      padding-left: 6%;
    }

    .close {
      float: right;
      margin-top: 0.4rem;
    }

    .running-character-bg {
      background-color: #ffffff;
      width: 22rem;
      height: 22rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    h3 {
      font-size: 2rem;
      font-family: "Raleway", sans-serif;
      font-weight: 700;
    }
    .running-character {
      width: 19.625rem;
      height: 19.625rem;
      box-shadow: 7px 7px 4px rgba(0, 0, 0, 0.2);
      width: 93%;
      height: 93%;
      margin: auto;
    }

    p {
      font-family: "Raleway", sans-serif;
      font-size: 1.5rem;
      font-weight: lighter;
      line-height: 1.2;
      padding-top: 2rem;
      width: 40%;
    }
    img {
      width: 1.8rem;
      margin-right: 0.5rem;
    }
  }
`;

export default Modal;
