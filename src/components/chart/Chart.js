import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  // List of expenses by month by year filter
  const expenseByMonth = props.monthlyTotals.map(
    (dataPoint) => dataPoint.value
  );
  // List total expenses by year filter
  const totalExpenses = expenseByMonth.reduce((a, b) => a + b, 0);

  return (
    // Return a list of ChartBar elements for monthly expenses filtered by year
    <div className="chart">
      {props.monthlyTotals.map((month) => (
        <ChartBar
          key={month.label}
          value={month.value}
          total={totalExpenses}
          label={month.label}
        />
      ))}
    </div>
  );
};

export default Chart;
