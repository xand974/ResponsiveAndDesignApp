import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: calc(100vh - 60px);
  width: 100%;
  display: flex;
  padding: 20px;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  width: 60%;

  font-size: 60px;
`;

const Description = styled.p`
  margin-top: 20px;
  width: 60%;
  font-size: 20px;
`;

const Info = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
`;

const Button = styled.button``;

const Right = styled.div`
  width: 40%;
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
          <Button>START</Button>
        </Info>
      </Left>
      <Right>Right</Right>
    </Container>
  );
}
