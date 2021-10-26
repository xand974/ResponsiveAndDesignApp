import React from "react";
import styled from "styled-components";
import { mobile, tablet } from "responsive";
const CardPrice = styled.div`
  position: relative;

  padding: 20px;
  width: 300px;
  height: 500px;
  margin: 0 60px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px gray;

  ${mobile({ width: "90%", height: "200px", margin: "20px 0" })}
`;

const SubscriptionText = styled.h3`
  margin-bottom: 20px;

  display: flex;
  align-items: center;

  font-size: 20px;
  font-weight: lighter;

  ${mobile({ fontSize: "15px", marginBottom: "10px" })}
`;
const NumberText = styled.span`
  font-size: 50px;
  font-weight: bold;

  ${mobile({ fontSize: "30px" })}
`;

const Button = styled.button`
  margin-bottom: 30px;
  padding: 10px;

  background: none;
  border: 1px solid red;
  border-radius: 15px;

  font-size: 16px;
  color: red;
  cursor: pointer;

  ${mobile({ padding: "5px", marginBottom: "10px", fontSize: "12px" })}
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Infotext = styled.p`
  font-size: 18px;
  margin-bottom: 20px;

  ${mobile({ fontSize: "13px", marginBottom: "10px" })}
`;

const JoinButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 15px;

  border: none;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  background: #0000ff;
  padding: 10px 20px;

  font-size: 18px;

  ${mobile({
    padding: "10px",
    fontSize: "15px",
    top: 0,
    right: 0,
    width: "50px",
    height: "50px",
    backgroundColor: "black",
    fontWeight: "lighter",
    borderRadius: "50%",
  })}
`;
export default function Card({ price, type }) {
  return (
    <CardPrice>
      <SubscriptionText>
        $<NumberText>{price}</NumberText>/month
      </SubscriptionText>
      <Button>{type}</Button>
      <Wrapper>
        <Infotext>Lorem ipsum dolor sit.</Infotext>
        <Infotext>Lorem, ipsum dolor.</Infotext>
        <Infotext>Lorem ipsum dolor sit amet.</Infotext>
        <Infotext>Lorem, ipsum.</Infotext>
      </Wrapper>
      <JoinButton>Join Now</JoinButton>
    </CardPrice>
  );
}
