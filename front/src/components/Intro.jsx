import React from "react";
import styled from "styled-components";
import imgSource from "../images/gameboy.png";
import AnimatedShapes from "./AnimatedShapes";
import { mobile, tablet } from "responsive";

const Container = styled.div`
  height: calc(100vh - 60px);
  width: 100%;
  display: flex;
  padding: 20px;
  margin-top: 100px;
  ${tablet({ flexDirection: "column" })}
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${tablet({ width: "100%" })}
  ${mobile({ width: "100%", padding: "10px " })}
`;

const Title = styled.h1`
  width: 60%;
  font-size: 60px;
  ${tablet({ fontSize: "5 rem" })}
  ${mobile({ fontSize: "40px", width: " 100%" })}
`;

const Description = styled.p`
  margin-top: 20px;
  width: 60%;
  font-size: 20px;
  ${tablet({ fontSize: "2rem" })}
  ${mobile({ width: "100%", fontSize: "20px" })}
`;

const Info = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  margin-top: 50px;
  align-items: center;
  justify-content: space-between;
  ${tablet({ width: "80%" })}
  ${mobile({ width: "100%" })}
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
  ${tablet({
    padding: "30px",
    marginRight: "30px",
    flex: 1,
    textAlign: "center",
  })}
  ${mobile({ padding: "10px 20px", marginRight: "10px" })}
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  ${tablet({ flex: 2 })}
  ${mobile({ flex: 1 })}
`;

const ContactText = styled.p`
  color: gray;
  font-size: 20px;
  ${tablet({ fontSize: "1.6rem" })}
  ${mobile({ fontSize: "18px" })}
`;

const Phone = styled.p`
  color: #b35f72;
  font-weight: bold;
  font-size: 20px;
  ${tablet({ fontSize: "1.9rem" })}
  ${mobile({ fontSize: "17px" })}
`;

const Right = styled.div`
  width: 40%;
  ${tablet({ width: "100%" })}
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${tablet({ width: "100%" })}
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
