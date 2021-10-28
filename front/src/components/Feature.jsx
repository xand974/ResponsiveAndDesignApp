import React from "react";
import styled from "styled-components";
import phone from "../images/phone.png";
import AnimatedShapes from "./AnimatedShapes";
import { mobile, tablet } from "responsive";
const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;

  ${tablet({ flexDirection: "column-reverse", padding: "20px 20px 0 20px" })}
`;

const Left = styled.div`
  width: 50%;
  ${tablet({ width: "100%" })}
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${tablet({ width: "100%" })}
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  ${tablet({ height: "35rem" })}

  ${mobile({ height: "400px" })}
`;

const Title = styled.span`
  font-size: 70px;
  ${tablet({ fontSize: "4rem", textAlign: "center" })}

  ${mobile({ fontSize: "40px" })}
`;
const Subtitle = styled.span`
  font-size: 25px;
  font-style: italic;
  color: #383838;
  margin-top: 30px;
  ${tablet({ width: "100%", fontSize: "1.8rem" })}

  ${mobile({ marginTop: "20px", fontSize: "20px" })}
`;
const Description = styled.p`
  font-size: 20px;
  margin-top: 30px;
  color: #565656;
  ${tablet({ width: "100%", fontSize: "1.5rem" })}

  ${mobile({ width: "100%", marginTop: "20px", fontSize: "17px" })}
`;
const Button = styled.button`
  width: 190px;
  padding: 15px 25px;
  background-color: #0000ff;
  margin-top: 30px;
  border: none;
  color: white;
  font-size: 17px;
  border-radius: 15px;
  font-weight: bold;
  cursor: pointer;
  ${tablet({ width: "60%", margin: "30px auto", fontSize: "1.6rem" })}

  ${mobile({ width: "150px", margin: "20px auto", fontSize: "15px" })}
`;

export default function Feature() {
  return (
    <Container>
      <Left>
        <Image src={phone} />
      </Left>
      <Right>
        <Title>
          <b>Real time</b> chat app
        </Title>
        <Title>
          <b>Ready</b> to use
        </Title>
        <Subtitle>
          Etends ton cercle d'amis et rencontre des personnes du monde entier.{" "}
        </Subtitle>
        <Description>
          Nous avons crée un système de rencontre innovante et nous avons
          l'intention de vous la faire profiter{" "}
        </Description>
        <Button>COMMENCER</Button>
      </Right>
      <AnimatedShapes />
    </Container>
  );
}
