import Header from "./components/Header/index.js";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #6096b4 35%, #bdcdd6);
`;

function App() {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
  );
}

export default App;
