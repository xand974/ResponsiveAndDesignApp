import React from "react";
import styled from "styled-components";
import imageSrc from "../images/Cyber.png";

const Container = styled.div`
  height: 100vh;

  display: flex;
`;

const Left = styled.div`
  display: flex;
  width: 50%;
`;

const Right = styled.div`
  display: flex;
  width: 50%;
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Description = styled.p`
  font-size: 20px;
  margin-top: 30px;
  color: #565656;
`;

const Image = styled.img`
  width: 100%;
`;

const Video = styled.video``;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-space-between;
  margin-top: 30px;
`;

export default function Service() {
  return (
    <Container>
      <Left>
        <Image src={imageSrc} />
      </Left>
      <Right>
        <Wrapper>
          <Title>Ne craignez rien...</Title>
          <Description>
            Nous ne stockons aucune donnée et vous promet une expérience
            utilisateur plus que satisfaisante. Vous pouvez résilier votre
            compte à tout moment, pour quelque raison que ce soit, en suivant
            les instructions dans les « Paramètres » du Service.
          </Description>
          <CardContainer></CardContainer>
        </Wrapper>
      </Right>
    </Container>
  );
}
