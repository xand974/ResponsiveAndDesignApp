import React from "react";
import styled from "styled-components";
import imgSource from "../images/gameboy.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  height: calc(100vh - 60px);
  width: 100%;
  display: flex;
  padding: 20px;
  margin-top: 100px;
  @media only screen and (max-width: 1650px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1650px) {
    width: 100%;
    padding: 10px;
  }
`;

const Title = styled.h1`
  width: 60%;

  font-size: 60px;
  @media only screen and (max-width: 1650px) {
    font-size: 40px;
    width: 100%;
  }
`;

const Description = styled.p`
  margin-top: 20px;
  width: 60%;
  font-size: 20px;
  @media only screen and (max-width: 1650px) {
    width: 100%;
  }
`;

const Info = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  margin-top: 50px;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1650px) {
    width: 100%;
  }
`;

const Button = styled.button`
  padding: 15px 25px;
  background: blue;
  color: white;
  border: none;
  border-radius: 15px;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;

  @media only screen and (max-width: 1650px) {
    padding: 10px 20px;
    margin-right: 10px;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactText = styled.p`
  color: gray;
  font-size: 20px;
  @media only screen and (max-width: 1650px) {
    font-size: 18px;
  }
`;

const Phone = styled.p`
  color: #b35f72;
  font-weight: bold;
  font-size: 20px;
  @media only screen and (max-width: 1650px) {
    font-size: 17px;
  }
`;

const Right = styled.div`
  width: 40%;
  @media only screen and (max-width: 1650px) {
    width: 100%;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function Intro() {
  return (
    <Container>
      <Left>
        <Title>Chat manywhere..</Title>
        <Description>
          Les problèmes de l'aire numérique fait place à de nouvelles solutions
          inovantes que nous cessons d'imaginer pour permettre à tous d'en
          profiter
        </Description>
        <Info>
          <Button>DOWNLOAD</Button>
          <Contact>
            <Phone>Contactez-nous (+33) 123 - 654125</Phone>
            <ContactText>Pour toute question</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={imgSource} />
      </Right>
      <AnimatedShapes />
    </Container>
  );
}
