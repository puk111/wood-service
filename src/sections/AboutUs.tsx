import React from "react";
import styled from "styled-components";
import { GloablTitle } from "../style";
import { StaticImage } from "gatsby-plugin-image";

function AboutUs() {
  return (
    <Wrapper>
      <Content>
        <TextContainer>
          <Title>About us</Title>
          <p>
            BIO CWT - we manufacture solid wood products according to individual
            drawings. We make chairs, armchairs, wardrobes, beds and much more
            in our own workshop, equipped with all the necessary industrial
            equipment.
          </p>
        </TextContainer>
        <Gallery>
          <StaticImage src="../images/about1.png" alt="" className="img1" />
          <StaticImage src="../images/about2.png" alt="" className="img2" />
          <StaticImage src="../images/about3.png" alt="" className="img3" />
        </Gallery>
      </Content>
    </Wrapper>
  );
}

export default AboutUs;

const Wrapper = styled.section`
  background-color: #1e0c06;
  border-radius: 0px 42px 42px 0px;
  margin-top: 80px;
  margin-right: 28px;
  padding: 47px 36px 29px 15px;
  margin-bottom: 20px;
  @media (min-width: 992px) {
    margin-right: 50px;
  }
  @media (min-width: 1200px) {
    margin-right: 100px;
  }
`;

const Title = styled.h2`
  ${GloablTitle}/* margin: 47px 0px 40px 0px; */
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;
const TextContainer = styled.div`
  margin-bottom: 50px;
  p {
    font-weight: 700;
    font-size: 15px;
    line-height: 139.4%;
  }
  @media (min-width: 768px) {
    width: 50%;
    p {
      margin-right: 100px;
      font-size: 22px;
    }
  }
  @media (min-width: 992px) {
    p {
      font-size: 30px;
    }
  }
`;
const Gallery = styled.div`
  position: relative;
  height: 650px;

  .img1 {
    position: absolute;
    display: block;
    z-index: 2;
    top: 10%;
    border-top: 8px solid #1e0c06;
    border-right: 8px solid #1e0c06;
    border-radius: 50px;
  }
  .img2 {
    position: absolute;
    top: 0;
    right: 0;
  }
  .img3 {
    position: absolute;
    bottom: 0;
    right: 10%;
  }
  @media (min-width: 768px) {
    width: 50%;
    max-width: 530px;
  }
`;
