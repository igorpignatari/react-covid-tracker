import numeral from "numeral";
import { useContext } from "react";
import styled from "styled-components";
import { useFetch } from "../services/FetchData";
import { LinesGraph } from "./LineGraph";
import { CountryContext } from "../contexts/CountryContext.jsx";
const Container = styled.div`
  grid-area: table;
  padding: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
  margin-right: 2rem;
  border-radius: 12px;
  background: white;
  margin-bottom: 1rem;
`;
const Table = styled.div`
  overflow-y: scroll;
  height: 550px;

  li {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
  }

  li:nth-of-type(odd) {
    background-color: #f3f3f3;
  }
  p {
    color: #535353;
  }
  p:last-child {
    font-weight: bold;
    color: #333333;
  }
`;

export const TableCountries = () => {
  const { countries } = useFetch();
  const { sortData } = useContext(CountryContext);
  const list = sortData(countries).map((country) => (
    <li key={country.country}>
      <p>{country.country}</p>
      <p>{numeral(country.cases).format(0, 0)}</p>
    </li>
  ));
  return (
    <Container>
      <h1>Live Cases by Country</h1>
      <Table>{list}</Table>
      <LinesGraph />
    </Container>
  );
};
