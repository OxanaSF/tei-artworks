import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "./NavbarItems";
import styled from "styled-components";
import logo from "../assets/images/Tei_Artworks.gif";
import instagram from "../assets/images/instagram.png";

const Navbar = () => {
  return (
    <NavbarStyled id="/">
      <div className="nav-left">
        <img src={logo} alt="logo" id="logo" />

        <ul>
          {routes.map((route) => (
            <NavLink className="li" to={route.path} key={route.name}>
              <div className="listItem">{route.name}</div>
            </NavLink>
          ))}
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
