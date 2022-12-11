import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  // in-line style for styling bar height for a given month based on "percent of total"
  let barFillHeight = "0%";

  if (props.total > 0) {
    // Return percent of total to fill bar filtered by year
    barFillHeight = Math.round((props.value / props.total) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          // set the height of the ChartBar based on percent of total
          style={{ height: barFillHeight }}
        ></div>
        <div className="chart-bar__label">{props.label}</div>
      </div>
    </div>
  );
};

export default ChartBar;
