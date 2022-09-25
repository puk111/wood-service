import React from "react";
import styled from "styled-components";
import { GloablTitle, GloablWrapp } from "../style";
import { StaticImage } from "gatsby-plugin-image";

const Contact = () => {
  return (
    <Wrapper>
      <Title>CONTACT</Title>

      <DataContainer>
        <DataContainerWrapper>
          <TextContainer className="phone-numer">
            <StaticImage src="../images/phone.svg" alt="" className="icon" />
            <Text>202-555-0162</Text>
          </TextContainer>
          <TextContainer>
            <StaticImage src="../images/pin.svg" alt="" className="icon" />
            <Text>7408 CARIE LN STANTON CA 90680-2954 USA</Text>
          </TextContainer>
        </DataContainerWrapper>
        <StaticImage src="../images/map.png" alt="" className="img" />
      </DataContainer>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.section`
  ${GloablWrapp}
`;

const Title = styled.h2`
  ${GloablTitle}
`;
const DataContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  .img {
    max-width: 493px;
    max-height: 428px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const DataContainerWrapper = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 139.4%;
  width: 100%;
  margin-bottom: 50px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1200px) {
    font-size: 30px;
    width: 50%;
  }
`;
const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  &.phone-numer {
    margin-bottom: 20px;
  }
  .icon {
    height: 24px;
    width: 24px;
  }
  @media (min-width: 768px) {
    .icon {
      height: 50px;
      width: 50px;
    }
  }
`;
const Text = styled.p`
  margin-left: 22px;
  max-width: 300px;
  @media (min-width: 768px) {
    max-width: 330px;
  }
`;
