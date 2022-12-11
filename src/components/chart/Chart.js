import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  console.log("from Chat.js props.dataPoints", props.dataPoints);
  const valueArray = props.dataPoints.map((dataPoint) => dataPoint.value);
  console.log("from Chat.js valueArray", valueArray);
  const totalMaximum = Math.max(...valueArray);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        console.log("From Chart.js ", dataPoint);
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
