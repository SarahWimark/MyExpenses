import React from "react";
import "./Chart.css";
import { ChartBar } from "./ChartBar";

export const Chart = ({ dataPoints }) => {
  return (
    <div className="chart">
      {dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={null}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};
