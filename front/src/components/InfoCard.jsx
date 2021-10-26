import React from "react";
import styled from "styled-components";
import imageSrc from "../images/search.png";
import { mobile, tablet } from "responsive";
const Container = styled.div`
  padding: 30px;
  width: 200px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 150px;
  box-shadow: 0 0 20px #ffbfbf;
  align-items: center;

  ${mobile({ width: "100px" })}
`;

const Image = styled.img`
  width: 30px;

  ${mobile({ width: "20px" })}
`;

const Text = styled.p`
  margin-top: 10px;
  text-align: center;

  ${mobile({ fontSize: "12px", textAlign: "left" })}
`;

export default function InfoCard() {
  return (
    <Container>
      <Image src={imageSrc} />
      <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
    </Container>
  );
}
