import React from "react";
import styled from "styled-components";
import logo from "../assets/images/Tei_Artworks.gif";
import instagram from "../assets/images/instagram.png";

const Navbar = () => {
  return (
    <NavbarStyled>
      <div className="nav-left">
        <img src={logo} alt="logo" id="logo" />
        <ul>
          <li>
            <a href="#locations">Home</a>
          </li>
          <li>
            <a href="#benefits">Exhibitions</a>
          </li>
          <li>
            <a href="#contact">About</a>
          </li>
          <li>
            <a href="#contact" className="nav-contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <img src={instagram} alt="instagram" id="instagram" />
    </NavbarStyled>
  );
};

const NavbarStyled = styled.nav`
  width: 1440px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.8rem 3.5rem 1.2rem 2rem;

  .nav-left {
    display: flex;
    align-items: center;
  }

  #logo {
    width: 5rem;
    background-color: white;
    border-radius: 50%;
    box-shadow: 8px 10px 20px rgba(0, 0, 0, 0.7);
  }

  #instagram {
    width: 2rem;
  }

  ul {
    display: flex;
    margin-left: 9.5rem;
    gap: 2.5rem;
  }

  a {
    font-weight: lighter;
    left: 0;
  }
`;

export default Navbar;
