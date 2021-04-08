import styled from "styled-components";
import { InfoBox } from "./InfoBox";
import { useContext } from "react";
import { CountryContext } from "../contexts/CountryContext";
import numeral from "numeral";

const Container = styled.div`
  grid-area: infoboxes;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 2.5rem;
`;

export const ContainerInfoBoxes = () => {
  const { countryInfo } = useContext(CountryContext);

  return (
    <Container>
      <InfoBox>
        <h3>coronavirus cases</h3>
        <p>
          +{" "}
          {countryInfo === undefined
            ? 0
            : numeral(countryInfo.todayCases).format("0, 0 a")}
        </p>
        <p>
          {countryInfo === undefined
            ? 0
            : numeral(countryInfo.cases).format("0, 0 a")}{" "}
          Total
        </p>
      </InfoBox>
      <InfoBox>
        <h3>recovered</h3>
        <p style={{ color: "#1dcd21" }}>
          +{" "}
          {countryInfo === undefined
            ? 0
            : numeral(countryInfo.todayRecovered).format("0, 0 a")}
        </p>
        <p>
          {countryInfo === undefined
            ? 0
            : numeral(countryInfo.recovered).format("0, 0 a")}{" "}
          Total
        </p>
      </InfoBox>
      <InfoBox>
        <h3>deaths</h3>
        <p>
          +{" "}
          {countryInfo === undefined
            ? 0
            : numeral(countryInfo.todayDeaths).format("0, 0 a")}
        </p>
        <p>
          {countryInfo === undefined
            ? 0
            : numeral(countryInfo.deaths).format("0, 0 a")}{" "}
          Total
        </p>
      </InfoBox>
    </Container>
  );
};
