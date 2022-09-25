import React from "react";
import { WoodWorkProps } from "../types";
import styled from "styled-components";
import imgOak from "../images/oak.png";
import imgBuk from "../images/buk.png";
import imgAsh from "../images/ash.png";
import ok from "../images/correct.svg";
import notok from "../images/notcorrect.svg";

const data: WoodWorkProps[] = [
  {
    img: imgOak,
    title: "Oak",
    list: [
      ["Beautiful texture", ok],
      ["Durability", ok],
      ["Water resistance", ok],
      ["Expensiveaaa", notok],
    ],
  },
  {
    img: imgBuk,
    title: "Buk",
    list: [
      ["Durability", ok],
      ["Hard to handle", notok],
    ],
  },
  {
    img: imgAsh,
    title: "Ash",
    list: [
      ["Durability", ok],
      ["Hard to handle", notok],
    ],
  },
];

function WoodWeWork() {
  return (
    <Wrapper>
      <Title>THE WOOD WE WORK WITH</Title>
      <ListContainer>
        <List>
          {data.map((item, index) => {
            return (
              <ListItem key={index}>
                <Img oak={item.img}></Img>
                <ListItemTitle>{item.title}</ListItemTitle>
                {item.list.map((el: any, inx: number) => {
                  return (
                    <ItemContainer key={inx}>
                      <img className="check__img" src={el[1]} alt="" />
                      <p>{el[0]}</p>
                    </ItemContainer>
                  );
                })}
              </ListItem>
            );
          })}
        </List>
      </ListContainer>
    </Wrapper>
  );
}

export default WoodWeWork;

const Wrapper = styled.section`
  width: 100%;

  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;
  color: #f5f5f5;
  padding: 2px 20px;
  overflow: hidden;
  margin-bottom: 100px;
  @media (min-width: 768px) {
    padding: 5px 60px;
  }
  @media (min-width: 992px) {
    margin-top: 100px;
  }
  @media (min-width: 1200px) {
    padding: 20px 120px;
  }
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 30px;
  line-height: 40px;
  max-width: 280px;
  margin-bottom: 90px;
  @media (min-width: 768px) {
    font-weight: 500;
    font-size: 48px;
    line-height: 80px;
    max-width: 500px;
  }
  @media (min-width: 1200px) {
    font-weight: 500;
    font-size: 90px;
    line-height: 120px;
    max-width: 750px;
  }
`;

const ListContainer = styled.div`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    max-width: 100%;
  }
`;

const List = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  @media (min-width: 768px) {
    width: 100%;
    justify-content: space-around;
  }
`;

const ListItem = styled.li`
  flex: 0 0 auto;
  padding: 10px;
  &:nth-child(2) {
    margin-top: 60px;
  }
  @media (min-width: 768px) {
    &:nth-child(2) {
      margin-top: 0px;
    }
  }
`;
const ItemContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  div {
  }
  p {
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    margin: 0 10px;
  }
  @media (min-width: 1200px) {
    margin-bottom: 30px;
    p {
      font-size: 30px;
      line-height: 30px;
      margin: 0 20px;
    }
    .check__img {
      width: 25px;
      height: 25px;
    }
  }
`;

const Img = styled.div<{ oak: string }>`
  width: 90px;
  height: 90px;
  background-image: url(${(props) => props.oak});
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 1200px) {
    width: 205px;
    height: 205px;
  }
`;
const ListItemTitle = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  margin-top: 16px;
  margin-bottom: 20px;
  @media (min-width: 1200px) {
    font-size: 30px;
    line-height: 30px;
    margin-top: 36px;
    margin-bottom: 40px;
  }
`;
