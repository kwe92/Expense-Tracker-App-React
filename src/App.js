import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseItem from "./components/expenses/ExpenseItem";
import { useEffect, useState } from "react";
import expenseData from "./components/data/ExpenseData";
import ExpenseItemModel from "./components/models/ExpenseItemModel";

const App = () => {
  // Array destructuring
  const [expenseList, setExpenseList] = useState([]);
  const [sortPressed, setSortPressed] = useState(false);

  // Kinda like initState / CommponentDidMount
  useEffect(() => {
    setExpenseList(expenseData);
  }, []);

  // Conditional sorting

  const sortHandler = () => {
    let sortedData;
    if (!sortPressed) {
      sortedData = [...expenseList].sort((a, b) => {
        return a.id > b.id ? -1 : 1;
      });
      setSortPressed(true);
    } else {
      sortedData = [...expenseList].sort((a, b) => {
        return a.id > b.id ? 1 : -1;
      });
      setSortPressed(false);
    }

    setExpenseList(sortedData);
  };

  //Array of ExpenseItems li wrapped
  const listExpenseItem = expenseList.map((expenseItem) => (
    <li key={expenseItem.id}>
      <ExpenseItem
        title={expenseItem.title}
        price={expenseItem.amount}
        date={new Date(expenseItem.date)}
      />
    </li>
  ));

  // Add new expense to expense list

  const expenseDataHandler = (expense) => {
    // console.log("From App.js", expense);

    setExpenseList((prevState) => {
      return [
        new ExpenseItemModel(
          expense.id,
          expense.title,
          expense.amount,
          expense.date
        ),
        // spreading
        ...prevState,
      ];
    });
  };

  return (
    <div>
      <div className="title-text">Expense Tracker</div>
      <NewExpense onNewExpense={expenseDataHandler} sort={sortHandler} />
      <Expenses expenses={listExpenseItem} />
    </div>
  );
};
export default App;
