import * as React from "react";
import { Link, HeadFC } from "gatsby";
import Nav from "../components/Nav";
import styled from "styled-components";
import { GloablTitle } from "../style";
import { StaticImage } from "gatsby-plugin-image";
import imgPath from "../images/bg-big.png";

const NotFoundPage = () => {
  return (
    <BackGroundWrapper imgBig={imgPath}>
      <StaticImage
        src="../images/hero-bg-img.png"
        alt=""
        className="hero-img"
      />
      <Nav background={false} />
      <TextWrapper>
        <Title>404</Title>
        <h4>Woops</h4>
        <p>Oh, you must be lost, there is no such page.</p>
        <Link to="/">
          <Button>Go to the home page</Button>
        </Link>
      </TextWrapper>
    </BackGroundWrapper>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;

const BackGroundWrapper = styled.section<{ imgBig: string }>`
  background: #222021;
  background-image: url(${(props) => props.imgBig});
  background-size: cover;
  position: relative;
  max-height: 100vh;
  .hero-img {
    max-height: 100vh;
    background-size: cover;
  }
`;
const TextWrapper = styled.div`
  position: absolute;
  top: 130px;
  width: 100%;
  text-align: center;
  z-index: 2;
  h4 {
    font-size: 30px;
    margin-bottom: 20px;
  }
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 36px;
    color: #ffdbbb;
  }
  @media (min-width: 576px) {
    h4 {
      font-size: 40px;
    }
  }
  @media (min-width: 768px) {
    h4 {
      font-size: 50px;
    }
    p {
      font-size: 16px;
    }
  }
  @media (min-width: 992px) {
    h4 {
      font-size: 60px;
    }
    p {
      font-size: 20px;
    }
  }
  @media (min-width: 1200px) {
    h4 {
      font-size: 90px;
    }
    p {
      font-size: 30px;
    }
  }
`;
const Title = styled.h2`
  font-weight: 500;
  font-size: 150px;
  line-height: 107.9%;

  //transform: translate(-50%, -80%);
  @media (min-width: 576px) {
    font-size: 200px;
  }
  @media (min-width: 768px) {
    font-size: 300px;
  }
  @media (min-width: 992px) {
    font-size: 300px;
  }
  @media (min-width: 1200px) {
    font-size: 500px;
  }
`;

const Button = styled.button`
  margin-top: 20px;
  background: #728bad;
  color: #f5f5f5;
  border-radius: 42px;
  padding: 7px 20px;
  border: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 36px;
  @media (min-width: 1200px) {
    padding: 11px 70px;
    font-size: 30px;
  }
`;
