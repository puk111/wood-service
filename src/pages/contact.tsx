import React from "react";
import BackGround from "../components/BackGround";
import Nav from "../components/Nav";
import Contact from "../sections/Contact";
import Questions from "../sections/Questions";

function contact() {
  return (
    <BackGround>
      <Nav background={true} />
      <Contact />
      <Questions />
    </BackGround>
  );
}

export default contact;
