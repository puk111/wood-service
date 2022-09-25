import React from "react";
import styled from "styled-components";
import { GloablTitle, GloablWrapp } from "../style";
import { StaticImage } from "gatsby-plugin-image";

function Questions() {
  return (
    <Wrapper>
      <Title>Any questions?</Title>
      <Container>
        <Text>
          Write to us and we will be sure to answer all your questions and give
          you a comprehensive consultation.
        </Text>
        <Form>
          <input type="text" placeholder="Your name" />
          <input type="number" placeholder="Your phone number" />
          <textarea placeholder="Your question"></textarea>
          <button>Send</button>
        </Form>
      </Container>
      <StaticImage src="../images/form.png" alt="" className="img" />
    </Wrapper>
  );
}

export default Questions;

const Wrapper = styled.section`
  ${GloablWrapp}
  margin-top: 80px;
  position: relative;
  overflow: hidden;
  .img {
    display: none;
    position: absolute;
  }
  @media (min-width: 1200px) {
    .img {
      display: block;
      bottom: -200px;
      right: 0;
    }
  }
`;

const Title = styled.h2`
  ${GloablTitle}
  max-width: none;
  @media (min-width: 576px) {
    margin-bottom: 20px;
    margin-right: 0;
    text-align: right;
  }
  @media (min-width: 768px) {
    max-width: none;
  }
  @media (min-width: 1200px) {
    max-width: none;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 576px) {
    flex-direction: row;
  }
`;

const Text = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 139.4%;
  margin-bottom: 45px;
  max-width: 550px;
  @media (min-width: 576px) {
    order: 2;
    width: 50%;
    margin-left: 10px;
    font-size: 20px;
  }
  @media (min-width: 768px) {
    font-size: 30px;
    margin-left: 20px;
  }
  @media (min-width: 1200px) {
    margin-left: 60px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 13px;
  line-height: 139.4%;
  color: #f5f5f5;
  input,
  textarea {
    color: #f5f5f5;
    background-color: transparent;
    outline: none;
    border: none;
    border: 2px solid #728bad;
    border-radius: 14px;
    padding: 12px 19px;
  }
  input {
    margin-bottom: 23px;
  }
  textarea {
    resize: none;
    height: 135px;
  }
  button {
    margin-top: 30px;
    background: #728bad;
    border-radius: 42px;
    font-weight: 700;
    font-size: 15px;
    line-height: 24px;
    color: #f5f5f5;
    width: 100px;
    outline: none;
    border: none;
    margin-bottom: 100px;
    @media (min-width: 768px) {
      font-size: 30px;
      width: 150px;
      height: 40px;
    }
  }
  @media (min-width: 576px) {
    order: 1;
    width: 50%;
    margin-right: 10px;
  }
  @media (min-width: 768px) {
    margin-right: 20px;
  }
  @media (min-width: 1200px) {
    margin-right: 60px;
    input,
    textarea {
      padding: 20px 50px;
      font-size: 30px;
    }
    textarea {
      height: 260px;
    }
  }
`;
