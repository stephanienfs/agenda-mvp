import "./App.css";
import { Container, Header, Text } from "./App.styles";
import Agenda from "./modules/Agenda";

function App() {
  return (
    <Container className="App">
      <Header>
        <Text>Save your contact!</Text>
      </Header>
      <Agenda />
    </Container>
  );
}

export default App;
