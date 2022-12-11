//TODO: Finish Expense Chart

import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseItem from "./components/expenses/ExpenseItem";
import { useEffect, useState } from "react";
import expenseData from "./components/data/ExpenseData";
import expenseItemObj from "./components/models/ExpenseItemObj";
import ExpenseFilter from "./components/expenses/ExpenseFilter";
import ExpenseChart from "./components/expenses/ExpenseChart";

const App = () => {
  // Array destructuring
  const [expenseList, setExpenseList] = useState([]);
  const [sortPressed, setSortPressed] = useState(false);
  const [dateFilter, setDateFilter] = useState("all");

  // Kinda like initState / CommponentDidMount
  useEffect(() => setExpenseList(expenseData), []);

  // Filter handler
  const filterHandler = (date) => setDateFilter(date);

  // Conditional sorting
  const sortHandler = () => {
    let sortedData;
    if (!sortPressed) {
      sortedData = [...expenseList].sort((a, b) => {
        return a.amount > b.amount ? -1 : 1;
      });
      setSortPressed(true);
    } else {
      sortedData = [...expenseList].sort((a, b) => {
        return a.amount > b.amount ? 1 : -1;
      });
      setSortPressed(false);
    }

    setExpenseList(sortedData);
  };

  //Filter Array
  let listExpenseItem2;
  let expenseLst;
  // Present all expense elements
  if (dateFilter === "all") {
    expenseLst = expenseList;
    listExpenseItem2 = expenseList.map((expenseItem) => (
      <li key={expenseItem.id}>
        <ExpenseItem
          title={expenseItem.title}
          price={expenseItem.amount}
          date={new Date(expenseItem.date)}
        />
      </li>
    ));
  }
  // Present elements based on the dateFilter
  else {
    console.log(expenseList);
    // Filter expenseList by dateFilter
    expenseLst = expenseList.filter(
      (expense) => expense.date.getFullYear() === parseInt(dateFilter)
    );

    // Array of <li> wrapped custom HTML ExpenseItem elements
    listExpenseItem2 = expenseLst.map((expenseItem) => (
      <li key={expenseItem.id}>
        <ExpenseItem
          title={expenseItem.title}
          price={expenseItem.amount}
          date={new Date(expenseItem.date)}
        />
      </li>
    ));
  }
  // Add new expense to expense list of expense obj
  const expenseDataHandler = (expense) =>
    setExpenseList((prevState) => [
      expenseItemObj(
        expense.title,
        parseFloat(expense.amount),
        new Date(expense.date)
      ),
      // spreading
      ...prevState,
    ]);

  console.log("from APP", expenseList);

  return (
    <div>
      <div className="title-text">Expense Tracker</div>
      <NewExpense onNewExpense={expenseDataHandler} sort={sortHandler} />
      <ExpenseFilter filter={filterHandler} />
      <ExpenseChart expenses={expenseLst} />
      <Expenses expenses={listExpenseItem2} />
    </div>
  );
};
export default App;
