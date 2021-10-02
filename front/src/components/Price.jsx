import React from "react";
import styled from "styled-components";
import Card from "./CardPrice";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1650px) {
    flex-direction: column;
  }
`;

export default function Price() {
  return (
    <Container>
      <Card price="10" type="Basic Plan" />
      <Card price="50" type="Silver Plan" />
      <Card price="300" type="Golden Plan" />
    </Container>
  );
}
