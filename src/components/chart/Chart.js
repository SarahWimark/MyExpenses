import React from "react";
import "./Chart.css";
import { ChartBar } from "./ChartBar";

export const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((datapoint) => datapoint.value);
  const maxValue = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={maxValue}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};
