import Plot from "react-plotly.js";
import { useFetch } from "../services/FetchData";

export const LinesGraph = () => {
  const { historical } = useFetch();
  const x = historical === undefined ? 0 : historical.map((teste) => teste.x);
  const y = historical === undefined ? 0 : historical.map((teste) => teste.y);

  return (
    <Plot
      data={[
        {
          x: x,
          y: y,
          type: "scatter",
          mode: "lines+markers",
          marker: { color: "red" },
        },
      ]}
      layout={{ width: 480, height: 300, title: "Worldwide new cases" }}
    />
  );
};
