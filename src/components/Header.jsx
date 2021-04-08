import styled from "styled-components";
import { useContext } from "react";
import { CountryContext } from "../contexts/CountryContext";
import { useFetch } from "../services/FetchData";

const Container = styled.div`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 73.5rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
  margin-left: 7rem;
  background: white;
  h1 {
    color: red;
    text-transform: capitalize;
  }
`;
const Dropdown = styled.select`
  padding: 0.7rem;
  border: solid 1.2px #919191;
  border-radius: 5px;
  appearance: none;
  background: transparent;
  cursor: pointer;
  font-size: 1.25rem;
  line-height: 1;
  display: grid;
`;

export const Header = () => {
  const { countries } = useFetch();
  const { country, onChangeCountry } = useContext(CountryContext);

  const list = countries.map((country) => (
    <option key={country.country} value={country.countryInfo.iso2}>
      {country.country}
    </option>
  ));

  return (
    <Container>
      <h1>covid-19 tracker</h1>
      <Dropdown value={country} onChange={onChangeCountry}>
        <option value="worldometer">worldometer</option>
        {list}
      </Dropdown>
    </Container>
  );
};
