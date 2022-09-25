import React from "react";
import styled from "styled-components";
import { GloablTitle, GloablWrapp } from "../style";
import { StaticImage } from "gatsby-plugin-image";
const Advantages = () => {
  return (
    <Wrapper>
      <Title>Advantages working with us</Title>
      <MainContainer>
        <TextContainer>
          <p>In-house carpentry production</p>
          <p>
            We only treat wood with environmentally friendly and safe products
          </p>
          <p>Prices from the manufacturer, no extra charges</p>
        </TextContainer>
        {/* <ImgContainer img={img}></ImgContainer> */}
        <StaticImage src="../images/video.png" alt=""></StaticImage>
      </MainContainer>
      <ButtonContainer>
        <button>Receive a consultation</button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default Advantages;
const Wrapper = styled.section`
  ${GloablWrapp}
  margin-top: 80px;
`;

const Title = styled.h2`
  ${GloablTitle}
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 576px) {
    flex-direction: row;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const TextContainer = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 139.4%;
  width: 100%;
  margin-bottom: 20px;

  p {
    margin: 10px 0;
    max-width: 320px;
  }
  @media (min-width: 576px) {
    order: 1;
    margin-left: 10px;
  }
  @media (min-width: 768px) {
    order: 1;
    width: 50%;
    margin-left: 25px;
    font-size: 18px;
    p {
      max-width: 1000px;
    }
  }
  @media (min-width: 992px) {
    font-size: 24px;
  }
  @media (min-width: 1200px) {
    font-size: 30px;
    margin-left: 50px;
  }
  @media (min-width: 1400px) {
    margin-left: 100px;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 45px;
  button {
    width: 219px;
    height: 33px;
    background: #728bad;
    border-radius: 42px;
    outline: none;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #f5f5f5;
    border: none;
  }
  @media (min-width: 1200px) {
    margin-top: 120px;
    button {
      width: 472px;
      height: 58px;
      font-size: 30px;
      line-height: 36px;
    }
  }
`;
