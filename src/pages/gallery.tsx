import React from "react";
import BackGround from "../components/BackGround";
import Nav from "../components/Nav";
import OurWork from "../sections/OurWork";
import SliderImg from "../images/sliderImg.png";
import WoodWeWork from "../sections/WoodWeWork";
import Questions from "../sections/Questions";
import { TabImgProps } from "../types";

const tabImg: TabImgProps = [SliderImg, SliderImg, SliderImg];

const gallery = () => {
  return (
    <BackGround>
      <Nav background={true} />
      <OurWork data={tabImg} />
      <WoodWeWork />
      <Questions />
    </BackGround>
  );
};

export default gallery;
