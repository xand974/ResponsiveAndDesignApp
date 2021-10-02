import React from "react";
import styled from "styled-components";
import imageSrc from "../images/search.png";

const Container = styled.div`
  padding: 30px;
  width: 200px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 150px;
  box-shadow: 0 0 20px #ffbfbf;
  align-items: center;

  @media only screen and (max-width: 1650px) {
    width: 100px;
  }
`;

const Image = styled.img`
  width: 30px;

  @media only screen and (max-width: 1650px) {
    width: 20px;
  }
`;

const Text = styled.p`
  margin-top: 10px;
  text-align: center;
  @media only screen and (max-width: 1650px) {
    font-size: 12px;
  }
`;

export default function InfoCard() {
  return (
    <Container>
      <Image src={imageSrc} />
      <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
    </Container>
  );
}
