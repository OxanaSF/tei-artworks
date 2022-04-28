import React from "react";
import styled from "styled-components";
import googleIcon from "../assets/images/google.png";
import instagramIcon from "../assets/images/instagram.png";
import copyrightIcon from "../assets/images/copyright.png";

const Footer = () => {
  return (
    <FooterStyled>
      <ul>
        <li><img src={googleIcon} alt="google icon " />
        <img src={instagramIcon} alt="instagram icon " />
        </li>
        
        <li><img src={copyrightIcon} alt="copyright icon " />
        <p>Tei Artworks {new Date().getFullYear()}</p>
        </li>

        <li></li>

      </ul>
    
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  /* display: flex;
  align-items: center; */
  margin: 6rem 3rem;
  min-height: 5rem;
  

  img {
    width: 1.7rem;
  }
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul li:nth-child(1){
    display: flex;
    gap: 1.1rem;
  }

  ul li:nth-child(2){
    display: flex;
    align-items: center;
    gap: 1.1rem;

    p {
      font-size: 0.875rem;
      font-size: 1rem;
      font-family: 'Raleway', sans-serif;
      font-weight: normal;
    }
    img {
      width: 1.5rem;
    }

    
    
  }

 
`;
export default Footer;
