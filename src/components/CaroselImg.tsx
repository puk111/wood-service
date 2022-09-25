import React, { useState, useEffect } from "react";
import { CaroselImgProps } from "../types";
import styled from "styled-components";
import left from "../images/left.svg";
import right from "../images/right.svg";

function CaroselImg({ dataImg }: CaroselImgProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(run, 2000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  function run() {
    setCurrentIndex(currentIndex + 1);
    changeImage();
  }

  function changeImage() {
    const isFirst = currentIndex === 0;
    const isLast = currentIndex === dataImg.length - 1;
    if (isFirst) {
      setCurrentIndex(currentIndex + 1);
    }
    if (isLast) {
      setCurrentIndex(0);
    }
  }

  const goToPrev = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? dataImg.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLast = currentIndex === dataImg.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const changeSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <Carousel>
        <ImgContainer
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {dataImg.map((src, index) => {
            return <img key={index} src={src} className="img"></img>;
          })}
        </ImgContainer>
        <Prev className="btn" left={left} onClick={goToPrev}></Prev>
        <Next className="btn" right={right} onClick={goToNext}></Next>
      </Carousel>
      <DotsContainer>
        {dataImg.map((item, index) => {
          return (
            <Dot
              className={currentIndex == index ? "active" : ""}
              key={index}
              onClick={() => changeSlide(index)}
            ></Dot>
          );
        })}
      </DotsContainer>
    </>
  );
}

export default CaroselImg;

const Carousel = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
  max-width: 1130px;
  max-height: 900px;
  margin-left: auto;
  margin-right: auto;
  .btn {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 50%;
    transform: translateY(-50%);
    background-position: center;
    background-size: cover;
    border: none;
  }
  @media (min-width: 768px) {
    .btn {
      width: 35px;
      height: 35px;
    }
  }
  @media (min-width: 1200px) {
    .btn {
      width: 50px;
      height: 50px;
    }
  }
`;

const ImgContainer = styled.div`
  display: flex;
  transform: translateX(0);
  transition: transform 0.5s ease-in-out;

  .img {
    padding: 25px 25px 0 25px;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (min-width: 768px) {
    .img {
      padding: 40px 40px 0 40px;
    }
  }
  @media (min-width: 1200px) {
    .img {
      padding: 60px 60px 0 60px;
    }
  }
`;

const Prev = styled.button<{ left: string }>`
  left: 0;
  background: url(${(props) => props.left});
`;
const Next = styled.button<{ right: string }>`
  right: 0;
  background: url(${(props) => props.right});
`;
const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px 0;
`;
const Dot = styled.button`
  width: 13px;
  height: 13px;
  margin: 0 3px;
  border: 2px solid #728bad;
  outline: none;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  &.active {
    background-color: #d5dcee;
  }
  @media (min-width: 1200px) {
    width: 26px;
    height: 26px;
    border: 4px solid #728bad;
  }
`;
