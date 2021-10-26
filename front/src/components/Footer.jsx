import {
  CalendarTodayOutlined,
  FavoriteBorder,
  InfoOutlined,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 90%;
  margin: auto;

  display: flex;

  border-top: 1px solid lightgray;
  flex-direction: column;
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

  @media screen and (max-width: 400px) {
    font-size: 0.8rem;
  }
`;

const CreditText = styled.span`
  text-align: center;
  color: #a3a3a3;
  margin-bottom: 5px;
  @media screen and (max-width: 400px) {
    font-size: 0.8rem;
  }
`;

export default function Footer() {
  return (
    <Container>
      <Wrapper>
        <FooterContent>
          <InfoOutlined style={{ fontSize: "25px" }} />
        </FooterContent>
        <FooterContent>
          <CalendarTodayOutlined style={{ fontSize: "25px" }} />
        </FooterContent>
        <FooterContent>
          <FavoriteBorder style={{ fontSize: "25px" }} />
        </FooterContent>
      </Wrapper>
      <CreditText>2021 - Alexandre Malet</CreditText>
    </Container>
  );
}
