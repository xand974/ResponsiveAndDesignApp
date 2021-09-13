import styled from "styled-components";
const Nav = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline #5a0413;
  font-size: 30px;
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
`;
const Item = styled.li`
  margin: 0px 10px;
  list-style-type: none;
  font-weight: bold;
  font-size: 20px;
  color: gray;
  cursor: pointer;
`;

const Button = styled.button`
  border: 3px solid black;
  padding: 10px 20px;
  font-size: 17px;
  background-color: gray;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
`;

export default function Navbar() {
  return (
    <Nav>
      <Wrapper>
        <Left>
          <Logo>Into the Dipe</Logo>
          <Menu>
            <Item>Acceuil</Item>
            <Item>Fonctionnalités</Item>
            <Item>Services</Item>
            <Item>Contact</Item>
            <Item>Prix</Item>
          </Menu>
        </Left>
        <Button>Join now</Button>
      </Wrapper>
    </Nav>
  );
}
