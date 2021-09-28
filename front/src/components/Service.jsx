import React, { useState } from "react";
import styled from "styled-components";
import imageSrc from "../images/Cyber.png";
import InfoCard from "components/InfoCard";
import Play from "../images/play.png";

const Container = styled.div`
  height: 100vh;

  display: flex;
`;

const Left = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  width: 50%;
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Description = styled.p`
  font-size: 20px;
  margin-top: 50px;
  color: #565656;
`;

const Image = styled.img`
  width: 100%;
  display: ${(props) => props.open && "none"};
`;

const Video = styled.video`
  display: ${(props) => !props.open && "none"};
  width: 90%;
  height: 300px;
  box-shadow: 0 0 20px black;
  object-fit: cover;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
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
          src="https://vod-progressive.akamaized.net/exp=1632836615~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4545%2F18%2F472726684%2F2106055564.mp4~hmac=45287c5e00b85aa8c9927e6350d00cb76c7ace02e92b66708e7fc54ab99723f1/vimeo-prod-skyfire-std-us/01/4545/18/472726684/2106055564.mp4?filename=Fog+-+53358.mp4"
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
          <CardContainer>
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
