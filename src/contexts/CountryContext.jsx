import { createContext, useState, useEffect } from "react";

export const CountryContext = createContext({});

export const CountryProvider = ({ children }) => {
  const [country, setCountry] = useState("worldometer");
  const [countryInfo, setCountryInfo] = useState();
  const [center, setCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [zoom, setZoom] = useState(3);
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((res) => res.json())
      .then((data) => setCountryInfo(data));
  }, []);

  const onChangeCountry = (event) => {
    const countryCode = event.target.value;

    const url =
      countryCode === "worldometer"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}?strict=true`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCountryInfo(data);
        if (countryCode === "worldometer") {
          setCenter({ lat: 34.80746, lng: -40.4796 });
          setZoom(3);
        } else {
          setCenter({
            lat: data.countryInfo.lat,
            long: data.countryInfo.long,
          });
          setZoom(6);
        }

        setCountry(countryCode);
      });
  };
  const showOnMap = (data) =>
    data.map((country) => ({
      name: country.country,
      lat: country.countryInfo.lat,
      long: country.countryInfo.long,
      cases: country.cases,
    }));
  const sortData = (data) => data.sort((a, b) => a.cases - b.cases).reverse();

  return (
    <CountryContext.Provider
      value={{
        country,
        countryInfo,
        onChangeCountry,
        center,
        zoom,
        showOnMap,
        sortData,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};
