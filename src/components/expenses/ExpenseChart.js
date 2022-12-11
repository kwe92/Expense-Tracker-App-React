import React from "react";
import Chart from "../chart/Chart";
import monthlyTotals from "../data/ChartData";

const ExpenseChart = (props) => {
  //TODO: Fix error, adds when App.js rerenders
  for (let i = 0; i < props.expenses.length; i++) {
    // Abbreviated month
    const expenseMonth = props.expenses[i].date.getMonth();
    // Total for each calander month
    monthlyTotals[expenseMonth].value += props.expenses[i].amount;
  }
  console.log("From ExpenseChart monthlyTotals", monthlyTotals);
  // Return the Chart
  return <Chart monthlyTotals={monthlyTotals}></Chart>;
};
export default ExpenseChart;
