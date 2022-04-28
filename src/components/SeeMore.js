import React from "react";
import styled from "styled-components";

const SeeMore = (props) => {
  return (
    <ArrowRightStyled className="arrow-right">
      <p>See more </p>
      <img src={props.arrowRight} alt="arrow right" />
    </ArrowRightStyled>
  );
};

const ArrowRightStyled = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  padding-right: 1.2rem;
  padding-top: 2.4rem;

  p {
    font-size: 1.5rem;
    font-weight: normal;
  }
`;

export default SeeMore;
