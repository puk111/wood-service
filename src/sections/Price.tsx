import React from "react";
import { PriceProps } from "../types";
import CaroselImg from "../components/CaroselImg";
import styled from "styled-components";
import { GloablTitle, GloablWrapp } from "../style";
import Nav from "../components/Nav";

function Price({ data }: PriceProps) {
  return (
    <Wrapper>
      <Nav background={true} />
      <Title>PRICE LIST</Title>
      <CaroselImg dataImg={data} />
    </Wrapper>
  );
}

export default Price;
const Wrapper = styled.section`
  ${GloablWrapp}
`;

const Title = styled.h2`
  ${GloablTitle}
`;
