import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  height: 50%;
  width: 90%;
  padding: 0 30px;
`;

const QuestionText = styled.h1`
  font-size: 40px;
  font-weight: bold;
  width: 50%;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const Input = styled.input`
  padding: 20px;
  outline: none;
  margin: 20px;
  width: 100%;
`;
const TextArea = styled.textarea`
  margin: 20px 40px;
  padding: 20px;
  height: 200px;
  width: 100%;

  resize: none;
  outline: none;
`;

const SendButton = styled.button`
  padding: 10px;
  width: 50%;
  margin: 0 auto;

  background: #0000ff;

  border: none;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  font-size: 18px;

  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const TextWrapper = styled.div`
  width: 50%;
  margin: 20px auto;

  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  object-fit: cover;
`;

const TextInfo = styled.p`
  font-size: 20px;
`;

export default function Contact() {
  return (
    <Container>
      <Left>
        <Wrapper>
          <QuestionText>
            Questions?
            <br /> Let's Get In Touch
          </QuestionText>
          <Form>
            <InputWrapper>
              <Input placeholder="Username" />
              <Input placeholder="Email" />
              <Input placeholder="Topic" />
            </InputWrapper>
            <InputWrapper>
              <TextArea placeholder="Your Message" />
              <SendButton>Send</SendButton>
            </InputWrapper>
          </Form>
        </Wrapper>
      </Left>
      <Right>
        <TextWrapper>
          <Logo src="https://pic.clubic.com/v1/images/1774822/raw?fit=smartCrop&height=900&width=900&hash=89abf740dc5a3b64bd730634497645fa2595a537" />{" "}
          <TextInfo>
            123 rue des Lorem ipsum dolor, Montpellier, France
          </TextInfo>
        </TextWrapper>
        <TextWrapper>
          <Logo src="https://pic.clubic.com/v1/images/1774822/raw?fit=smartCrop&height=900&width=900&hash=89abf740dc5a3b64bd730634497645fa2595a537" />{" "}
          <TextInfo>+33 635 98 45 65</TextInfo>
        </TextWrapper>
        <TextWrapper>
          <Logo src="https://pic.clubic.com/v1/images/1774822/raw?fit=smartCrop&height=900&width=900&hash=89abf740dc5a3b64bd730634497645fa2595a537" />{" "}
          <TextInfo>xand974@gmail.com github : xand974</TextInfo>
        </TextWrapper>
      </Right>
    </Container>
  );
}
