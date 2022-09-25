import React from "react";
import BackGround from "../components/BackGround";
import Nav from "../components/Nav";
import OurWork from "../sections/OurWork";
import AboutUs from "../sections/AboutUs";
import SliderImg from "../images/sliderImg.png";
import Questions from "../sections/Questions";
import { TabImgProps } from "../types";

const tabImg: TabImgProps = [SliderImg, SliderImg, SliderImg];

function about() {
  return (
    <BackGround>
      <Nav background={true} />
      <AboutUs />
      <OurWork data={tabImg} />
      <Questions />
    </BackGround>
  );
}

export default about;
