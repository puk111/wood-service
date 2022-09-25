import React, { useState, useEffect } from "react";
import { NavProps } from "../types";
import styled from "styled-components";
import { Link } from "gatsby";
import LogoImg from "../images/logo-desktop.svg";

const Nav = ({ background }: NavProps) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [offset, setOffset] = useState(0);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navi background={background} className={offset == 0 ? "" : "dispayNone"}>
      <Wrapper>
        <Link to="/">
          <Logo src={LogoImg} />
        </Link>
        <Links
          background={background}
          className={navbarOpen ? "show" : "hiden"}
        >
          <Link to="/gallery" activeClassName="active">
            Gallery
          </Link>
          <Link to="/prices" activeClassName="active">
            Prices for services
          </Link>
          <Link to="/about" activeClassName="active">
            About us
          </Link>
          <Link to="/contact" activeClassName="active">
            Contact
          </Link>
        </Links>

        <Hamburger onClick={handleToggle}>
          <div
            className={
              navbarOpen ? "burger__dash--top-close" : "burger__dash--top"
            }
          ></div>
          <div
            className={
              navbarOpen ? "burger__dash--middle-close" : "burger__dash--middle"
            }
          ></div>
          <div
            className={
              navbarOpen ? "burger__dash--bottom-close" : "burger__dash--bottom"
            }
          ></div>
        </Hamburger>
      </Wrapper>
    </Navi>
  );
};

export default Nav;

const Navi = styled.nav<{ background: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 10;
  background: ${({ background }) => (background ? "#1e0c06;" : "transparent")};
  box-shadow: ${({ background }) =>
    background ? "0px -8px 52px rgba(238, 238, 238, 0.17)" : "none"};
  border-radius: 0px 0px 17px 17px;
  @media (min-width: 1200px) {
    border-radius: 0px 0px 80px 80px;
  }
  &.dispayNone {
    display: none;
  }
`;

const Wrapper = styled.div`
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  height: 82px;
  padding: 0px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 1200px) {
    height: 180px;
  }
`;
const Logo = styled.img`
  width: 85px;
  height: 36px;
  z-index: 10;
  @media (min-width: 768px) {
  }
  @media (min-width: 1200px) {
    width: 197px;
    height: 83.8px;
  }
`;

const Hamburger = styled.button`
  z-index: 10;
  width: 23px;
  height: 22px;
  position: relative;
  background-color: transparent;
  outline: none;
  border: none;
  .burger__dash {
    &--top,
    &--middle,
    &--bottom,
    &--top-close,
    &--middle-close,
    &--bottom-close {
      position: absolute;
      margin: 0;
      padding: 0;
      border: 2px solid white;
      border-radius: 5px;
      transition: transform 0.7s linear;
    }
    &--top {
      top: 0;
      left: 0;
      width: 50%;
      &-close {
        top: 0;
        left: 0;
        width: 50%;
        transform: rotate(405deg) translate(50%, 50%) scaleX(1.5);
      }
    }
    &--middle {
      top: 50%;
      left: 0;
      width: 100%;
      transform: translateY(-50%);
      &-close {
        top: 50%;
        left: 0;
        width: 100%;
        transform: rotate(-45deg) translateY(-50%) scaleX(1.2);
      }
    }
    &--bottom {
      bottom: 0;
      right: 0;
      width: 50%;
      &-close {
        bottom: 0;
        right: 0;
        width: 50%;
        transform: rotate(405deg) translate(-50%, -50%) scaleX(1.5);
      }
    }
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const Links = styled.ul<{ background: boolean }>`
  &.hiden {
    transform: translateX(-102%);
    transition: transform 0.7s linear;
  }
  &.show {
    transform: translateX(0);
    transition: transform 0.7s linear;
  }
  position: fixed;
  top: 65px;
  left: 0;
  right: 0;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${({ background }) => (background ? "#1e0c06;" : "transparent")};
  border-radius: 0px 0px 17px 17px;
  a {
    text-align: center;
    color: white;
    text-decoration: none;
    line-height: 24px;
    font-weight: 700;
  }
  .active {
    color: #a3b8d7;
  }
  @media (min-width: 768px) {
    &.hiden {
      transform: translateX(0);
    }
    position: unset;
    display: flex;
    width: auto;
    flex-direction: row;
    a {
      padding: 0 10px;
    }
  }
  @media (min-width: 1200px) {
    a {
      padding: 0 15px;
      font-size: 20px;
      line-height: 24px;
    }
  }
`;
