import React from "react";
import BackGround from "../components/BackGround";
import Price from "../sections/Price";
import SliderImg from "../images/price.png";
import Questions from "../sections/Questions";
import { TabImgProps } from "../types";

const tabImg: TabImgProps = [SliderImg, SliderImg, SliderImg];
const prices = () => {
  return (
    <BackGround>
      <Price data={tabImg} />
      <Questions />
    </BackGround>
  );
};

export default prices;
