import * as React from "react";
import "../../reset.css";
import "../global-style.css";
import Header from "../components/Header";
import Nav from "../components/Nav";
import BackGround from "../components/BackGround";
import HeroSection from "../sections/HeroSection";
import WoodWeWork from "../sections/WoodWeWork";
import OurWork from "../sections/OurWork";
import Advantages from "../sections/Advantages";
import AboutUs from "../sections/AboutUs";
import Questions from "../sections/Questions";
import SliderImg from "../images/sliderImg.png";
import { TabImgProps } from "../types";

const tabImg: TabImgProps = [SliderImg, SliderImg, SliderImg];

const IndexPage = () => {
  return (
    <BackGround>
      <Nav background={false} />
      <HeroSection />
      <WoodWeWork />
      <OurWork data={tabImg} />
      <Advantages />
      <AboutUs />
      <Questions />
    </BackGround>
  );
};

export default IndexPage;
