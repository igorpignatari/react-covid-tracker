import { useContext } from "react";
import styled from "styled-components";
import { CountryContext } from "../contexts/CountryContext";
import { useFetch } from "../services/FetchData";
import { MapContainer, TileLayer, Circle, Tooltip } from "react-leaflet";
import numeral from "numeral";

const Container = styled.div`
  grid-area: map;

  border-radius: 12px;
  margin-left: 7rem;
  width: 75.2rem;
  height: 38.6rem;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;

  .leaflet-container {
    width: 95%;
    height: 90%;
    border-radius: 12px;
  }
`;

export const CovidMap = () => {
  const { center, zoom, showOnMap } = useContext(CountryContext);
  const { countries } = useFetch();
  const showDataMap = countries === undefined ? 0 : showOnMap(countries);

  return (
    <Container>
      <MapContainer center={[center.lat, center.lng]} zoom={zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {showDataMap.map((country) => (
          <Circle
            key={country.name}
            center={[country.lat, country.long]}
            color={"#cc1034"}
            radius={Math.sqrt(country.cases) * 150}
          >
            <Tooltip>{numeral(country.cases).format(0, 0)}</Tooltip>
          </Circle>
        ))}
      </MapContainer>
    </Container>
  );
};
