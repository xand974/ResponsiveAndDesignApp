import React from "react";
import styled from "styled-components";
import phone from "../images/phone.png";
import AnimatedShapes from "./AnimatedShapes";
const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;

  @media only screen and (max-width: 1650px) {
    flex-direction: column-reverse;
    padding: 20px 20px 0 20px;
  }
`;

const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 1650px) {
    width: 100%;
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 1650px) {
    width: 100%;
  }
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  @media only screen and (max-width: 1650px) {
    height: 400px;
  }
`;

const Title = styled.span`
  font-size: 70px;
  @media only screen and (max-width: 1650px) {
    font-size: 40px;
  }
`;
const Subtitle = styled.span`
  font-size: 25px;
  font-style: italic;
  color: #383838;
  margin-top: 30px;
  @media only screen and (max-width: 1650px) {
    width: 100%;
    margin-top: 20px;
    font-size: 20px;
  }
`;
const Description = styled.p`
  font-size: 20px;
  margin-top: 30px;
  color: #565656;
  @media only screen and (max-width: 1650px) {
    width: 100%;
    margin-top: 20px;
    font-size: 17px;
  }
`;
const Button = styled.button`
  width: 190px;
  padding: 15px 25px;
  background-color: #0000ff;
  margin-top: 30px;
  border: none;
  color: white;
  font-size: 17px;
  border-radius: 15px;
  font-weight: bold;
  cursor: pointer;
  @media only screen and (max-width: 1650px) {
    width: 150px;
    font-size: 15px;
    margin: 20px auto;
  }
`;

export default function Feature() {
  return (
    <Container>
      <Left>
        <Image src={phone} />
      </Left>
      <Right>
        <Title>
          <b>Real time</b> chat app
        </Title>
        <Title>
          <b>Ready</b> to use
        </Title>
        <Subtitle>
          Etends ton cercle d'amis et rencontre des personnes du monde entier.{" "}
        </Subtitle>
        <Description>
          Nous avons crée un système de rencontre innovante et nous avons
          l'intention de vous la faire profiter{" "}
        </Description>
        <Button>COMMENCER</Button>
      </Right>
      <AnimatedShapes />
    </Container>
  );
}
