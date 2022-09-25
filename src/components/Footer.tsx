import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  return (
    <FooterContainer>
      <StaticImage src="../images/logo-desktop.svg" alt="" className="logo" />
      <Pin>
        <StaticImage src="../images/pin.svg" alt="" className="icon" />
        <p>7408 CARIE LN STANTON CA 90680-2954 USA</p>
      </Pin>
      <Phone>
        <StaticImage src="../images/phone.svg" alt="" className="icon" />
        <p>202-555-0162</p>
      </Phone>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #222021;
  padding: 80px 20px;
  box-shadow: 0px -6px 52px rgba(245, 245, 245, 0.17);
  .logo {
    background-position: center;
    max-width: 200px;
    max-height: 100px;
    margin-bottom: 43px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    .logo {
      margin-bottom: 0px;
    }
  }
`;
const Pin = styled.div`
  display: flex;
  align-items: center;
  width: 280px;
  p {
    margin-left: 20px;
    font-weight: 500;
    font-size: 15px;
    line-height: 139.4%;
  }
  .icon {
    height: 24px;
    width: 30px;
    background-size: cover;
  }
  @media (min-width: 768px) {
    order: 2;
  }
  @media (min-width: 1200px) {
    width: auto;
    max-width: 600px;
    .icon {
      height: 50px;
      width: 50px;
    }
    p {
      font-size: 30px;
    }
  }
`;
const Phone = styled.div`
  display: flex;
  align-items: center;
  width: 280px;
  margin-top: 17px;
  p {
    margin-left: 20px;
    font-weight: 500;
    font-size: 15px;
    line-height: 139.4%;
  }
  .icon {
    height: 24px;
    width: 24px;
  }
  @media (min-width: 768px) {
    margin-top: 0px;
    order: 1;
  }
  @media (min-width: 1200px) {
    width: auto;
    .icon {
      height: 50px;
      width: 50px;
    }
    p {
      font-size: 30px;
    }
  }
`;
