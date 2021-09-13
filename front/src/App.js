import Feature from "components/Feature";
import Intro from "components/Intro";
import Navbar from "components/Navbar";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;
const Shape = styled.div`
  background: #0d3f66;
  clip-path: polygon(78% 0, 100% 0, 100% 100%, 56% 100%);
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const App = () => {
  return (
    <>
      <Container>
        <Shape />
        <Navbar />
        <Intro />
      </Container>
      <Container>
        <Feature />
      </Container>
    </>
  );
};

export default App;
