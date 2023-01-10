import { GlobalStyle, ContainerBox, HeaderBox } from "./StyledApp.js";
import { Header } from "./components/Header/Header.js";
import { Container } from "./components/Container/Container.js";
import { Footer } from "./components/Footer.js/Footer.js";

function App() {
  return (
    <div>
      <GlobalStyle/>
      <HeaderBox>
        <Header/>
      </HeaderBox>
      <ContainerBox>
        <Container/>
      </ContainerBox>
      <Footer/>
    </div>
  );
}

export default App;
