import React from "react";
import { BackGroundProps } from "../types";
import styled from "styled-components";
import imgPath from "../images/bg-big.png";
import imgPathSmall from "../images/bg-small.png";
import Footer from "./Footer";

const BackGround = ({ children }: BackGroundProps) => {
  return (
    <Wrapper imgBig={imgPath} imgSmall={imgPathSmall}>
      <div>{children}</div>
      <Footer />
    </Wrapper>
  );
};

export default BackGround;

const Wrapper = styled.div<{ imgBig: string; imgSmall: string }>`
  padding-top: 100px;
  background-color: #222021;
  background-image: url(${(props) => props.imgSmall});

  @media (min-width: 1200px) {
    padding-top: 200px;
    background-image: url(${(props) => props.imgBig});
  }
`;
