import { useState, useEffect } from "react";

export const useFetch = () => {
  const [countries, setCountries] = useState([]);
  const [historical, setHistorical] = useState();

  //trasnferir para utils --------------------------------
  const buildChartData = (data, casesType) => {
    let chartData = [];
    let lastDataPoint;
    for (let date in data.cases) {
      if (lastDataPoint) {
        let newDataPoint = {
          x: date,
          y: data[casesType][date] - lastDataPoint,
        };
        chartData.push(newDataPoint);
      }
      lastDataPoint = data[casesType][date];
    }
    return chartData;
  };

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=30")
      .then((res) => res.json())
      .then((data) => {
        let chartData = buildChartData(data, "cases");
        setHistorical(chartData);
      });
  }, []);

  return { countries, historical };
};
