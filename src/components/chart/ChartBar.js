import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  // TODO: FIX
  if (props.maxValue > 0) {
    console.log("MATH:", Math.round(props.value / props.maxValue));
    barFillHeight = Math.floor((props.value / props.maxValue) * 100) + "%";

    console.log("from Chart Bar barFillHeight", barFillHeight);
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
        <div className="chart-bar__label">{props.label}</div>
      </div>
    </div>
  );
};

export default ChartBar;
