import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const HeroSection = () => {
  return (
    <Container>
      <StaticImage
        src="../images/hero-bg-img.png"
        alt=""
        className="hero-img"
      />
      <MainWrap>
        <div className="main__wrap-text">
          <h2>Solid wood products</h2>
          <p>Oak, beech, ash from 1700 CZK per m3</p>
          <button>Order</button>
        </div>
        <div className="main__wrap-img">
          <div className="main__wrap-img--col-1">
            <StaticImage
              src="../images/hero-img-1.png"
              alt=""
              className="hero-img-1 prod-img"
            />
          </div>
          <div className="main__wrap-img--col-2">
            <StaticImage
              src="../images/hero-img-2.png"
              alt=""
              className="hero-img-2 prod-img"
            />
            <StaticImage
              src="../images/hero-img-3.png"
              alt=""
              className="hero-img-3 prod-img"
            />
          </div>
        </div>
      </MainWrap>
    </Container>
  );
};

export default HeroSection;

const Container = styled.section`
  position: relative;
  width: 100%;
  min-height: 840px;
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;
  .hero-img {
    position: absolute;
    top: -100px;
    left: 0;
    margin-right: 90px;
    background-size: cover;
  }
  @media (min-width: 768px) {
    min-height: 980px;
  }
  @media (min-width: 992px) {
    min-height: 1080px;
  }
  @media (min-width: 1200px) {
    .hero-img {
      top: -200px;
    }
  }
`;

const MainWrap = styled.div`
  position: absolute;
  min-width: 326px;
  right: 0;
  height: 360px;
  padding: 40px 21px 0 16px;
  left: 49px;
  top: 130px;
  background: #1e0c06;
  box-shadow: 0px 4px 52px rgba(245, 245, 245, 0.17);
  border-radius: 14px 0px 0px 14px;
  .main__wrap-text {
    border-bottom: 1px solid white;
    height: 250px;
    z-index: 3;
  }
  .main__wrap-img {
    z-index: 2;
    display: flex;
    width: 100%;
    min-height: 600px;
    justify-content: space-between;
    margin-top: -200px;
    &--col-1 {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      margin-bottom: 120px;
    }
    &--col-2 {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 20px;
      padding-right: 0;
    }
  }
  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 32px;
    text-transform: uppercase;
    color: #f5f5f5;
    max-width: 285px;
  }
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #ffdbbb;
    margin-top: 10px;
    margin-bottom: 20px;
    max-width: 165px;
  }
  button {
    background: #728bad;
    border-radius: 42px;
    padding: 10px 17px;
    width: 100px;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #f5f5f5;
    outline: none;
    border: none;
  }
  @media (min-width: 576px) {
    .main__wrap-img {
      margin-top: -250px;
    }
  }

  @media (min-width: 768px) {
    //992px
    display: flex;
    padding: 60px 30px;
    p {
      margin: 30px 0;
    }
    .main__wrap-img {
      min-height: auto;
      margin: auto;
      justify-content: center;
      //margin-top: 10px;
      &--col-1 {
        justify-content: center;
        margin-bottom: 0;
      }
      &--col-2 {
        flex-direction: row;
        justify-content: center;
        height: auto;
        padding: 0;
      }
    }
    .prod-img {
      margin: 10px;
    }
    .main__wrap-text {
      border-bottom: none;
      border-right: 1px solid white;
    }
  }
  @media (min-width: 1200px) {
    top: 100px;
    height: 715px;
    padding: 100px 62px;
    h2 {
      font-size: 90px;
      line-height: 104px;
      max-width: 700px;
      padding-right: 10px;
      display: block;
    }
    p {
      font-weight: 400;
      font-size: 30px;
      line-height: 39px;
      color: #ffdbbb;
      margin-top: 22px;
      margin-bottom: 20px;
      max-width: 333px;
    }
    .main__wrap-text {
      width: 55%;
      height: 100%;
    }
    .main__wrap-img {
      width: 45%;
      &--col-2 {
        flex-direction: column;
      }
    }

    button {
      padding: 11px 70px;
      width: 225px;
      font-weight: 700;
      font-size: 30px;
      line-height: 36px;
      color: #f5f5f5;
    }
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #fff;
  margin-top: 42px;
  margin-bottom: 50px;
`;
