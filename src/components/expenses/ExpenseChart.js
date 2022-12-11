import React from "react";
import Chart from "../chart/Chart";
import monthlyTotals from "../data/ChartData";

const ExpenseChart = (props) => {
  //TODO: Fix error, adds when App.js rerenders

  for (const expense of props.expenses) {
    console.log("From ExpenseChart expense", expense.amount);
    const expenseMonth = expense.date.getMonth();
    monthlyTotals[expenseMonth].value += expense.amount;
  }
  return <Chart monthlyTotals={monthlyTotals}></Chart>;
};
export default ExpenseChart;
