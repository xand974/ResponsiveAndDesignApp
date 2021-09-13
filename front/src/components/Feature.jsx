import React from "react";
import styled from "styled-components";
import phone from "../images/phone.png";
const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Left = styled.div`
  width: 50%;
`;

const Right = styled.div`
  width: 50%;
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
`;

const Title = styled.span``;
const Subtitle = styled.span``;
const Description = styled.p``;
const Button = styled.button``;

export default function Feature() {
  return (
    <Container>
      <Left>
        <Image src={phone} />
      </Left>
      <Right>
        <Title></Title>
        <Subtitle></Subtitle>
        <Description></Description>
        <Button></Button>
      </Right>
    </Container>
  );
}
