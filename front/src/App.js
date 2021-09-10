import Intro from "components/Intro";
import Navbar from "components/Navbar";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
`;
const App = () => {
  return (
    <Container>
      <Navbar />
      <Intro />
    </Container>
  );
};

export default App;
