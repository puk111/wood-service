import React from "react";
import { WorkProps } from "../types";
import CaroselImg from "../components/CaroselImg";
import styled from "styled-components";
import { GloablTitle, GloablWrapp } from "../style";

const OurWork = ({ data }: WorkProps) => {
  return (
    <Wrapper>
      <Title>OUR WORK</Title>
      <CaroselImg dataImg={data} />
    </Wrapper>
  );
};

export default OurWork;

const Wrapper = styled.section`
  ${GloablWrapp}
`;

const Title = styled.h2`
  ${GloablTitle}
`;
