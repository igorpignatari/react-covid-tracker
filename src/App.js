import { createGlobalStyle } from "styled-components";
import { ContainerInfoBoxes } from "./components/ContainerInfoBoxes";
import { Header } from "./components/Header";
import { CountryProvider } from "./contexts/CountryContext";
import { TableCountries } from "./components/Table";
import { Container } from "./components/Container";
import { CovidMap } from "./components/Map";
import "leaflet/dist/leaflet.css";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #e9e9e9;
    font-family: 'Inter', sans-serif;
  }
`;

export function App() {
  return (
    <>
      <GlobalStyle />
      <CountryProvider>
        <Container>
          <CovidMap />
          <Header />
          <ContainerInfoBoxes />
          <TableCountries />
        </Container>
      </CountryProvider>
    </>
  );
}
