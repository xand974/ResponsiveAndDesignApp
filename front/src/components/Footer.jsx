import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 90%;
  margin: auto;

  display: flex;

  border-top: 1px solid lightgray;
`;
const Wrapper = styled.div`
  width: 100%;
  margin: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterContent = styled.span`
  margin-right: 20px;
`;

export default function Footer() {
  return (
    <Container>
      <Wrapper>
        <FooterContent>2021 - Alexandre Malet</FooterContent>
        <FooterContent>2021 - Alexandre Malet</FooterContent>
        <FooterContent>2021 - Alexandre Malet</FooterContent>
        <FooterContent>2021 - Alexandre Malet</FooterContent>
      </Wrapper>
    </Container>
  );
}
