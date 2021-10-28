import React, { useState } from "react";
import styled from "styled-components";
import imageSrc from "../images/Cyber.png";
import InfoCard from "components/InfoCard";
import Play from "../images/play.png";
import { mobile, tablet } from "responsive";

const Container = styled.div`
  height: 100vh;
  position: relative;
  display: flex;

  ${tablet({ flexDirection: "column-reverse" })}
`;

const Left = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  height: 100vh;
  align-items: center;
  ${mobile({ width: "100%" })}
`;

const Right = styled.div`
  display: flex;
  width: 50%;
  ${tablet({ width: "100%" })}
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  ${mobile({ padding: "35px 20px" })}
`;

const Title = styled.h1`
  font-size: 70px;

  ${mobile({ fontSize: "40px" })}
`;

const Description = styled.p`
  font-size: 20px;
  margin-top: 50px;
  color: #565656;
  ${mobile({
    fontSize: "17px",
    width: "100%",
    marginTop: "20px",
    color: "gray",
  })}
`;

const Image = styled.img`
  width: 100%;
  display: ${(props) => props.open && "none"};
  ${tablet({ display: "none" })}
`;

const Video = styled.video`
  display: ${(props) => !props.open && "none"};
  width: 90%;
  height: 300px;
  box-shadow: 0 0 20px black;
  object-fit: cover;

  ${tablet({
    position: "absolute",
    top: "75%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  })}
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  ${mobile({ width: "100%", display: (props) => props.open && "none" })}
`;
const Button = styled.button`
  width: 400px;
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  background: #0000ff;
  padding: 20px 30px;
  margin-top: 80px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${tablet({
    fontSize: "14px",
    width: "60%",
    padding: "10px",
    margin: "50px auto",
  })}
`;

const Icon = styled.img`
  width: 30px;
  margin-right: 10px;
`;

export default function Service() {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Left>
        <Image open={open} src={imageSrc} />
        <Video
          autoPlay
          loop
          open={open}
          src="https://assets.mixkit.co/videos/preview/mixkit-fly-over-a-huge-canyon-covered-in-vegetation-41401-large.mp4"
        />
      </Left>
      <Right>
        <Wrapper>
          <Title>Ne craignez rien...</Title>
          <Description>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
            reprehenderit tempora placeat tenetur illum magni blanditiis maxime
            tempore ipsum alias voluptates, eius dicta optio dolore deserunt,
            modi ex harum odit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Qui optio aut commodi quas porro tenetur quaerat
            dignissimos corrupti neque veritatis?
          </Description>
          <CardContainer open={open}>
            <InfoCard />
            <InfoCard />
            <InfoCard />
          </CardContainer>
          <Button
            onClick={() => {
              setOpen(true);
            }}
          >
            <Icon src={Play} /> EN SAVOIR +
          </Button>
        </Wrapper>
      </Right>
    </Container>
  );
}
