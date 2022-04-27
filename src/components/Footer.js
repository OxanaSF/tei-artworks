import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="bottom">Footer</div>
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  min-height: 5rem;
`;
export default Footer;
