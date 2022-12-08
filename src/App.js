import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import fetchExpenses from "./components/data/ExpenseData";
import ExpenseItem from "./components/expenses/ExpenseItem";
import { useState } from "react";
// import ExpenseItemModel from "./components/models/ExpenseItemModel";

const App = () => {
  // Array of expense objects
  const expenses = fetchExpenses();

  const listExpenseItem = expenses.map((expenseItem) => (
    <li key={expenseItem.id}>
      <ExpenseItem
        title={expenseItem.title}
        price={expenseItem.amount}
        date={expenseItem.date}
      />
    </li>
  ));

  const [expenseList, setExpenseList] = useState(listExpenseItem);
  const expenseDataHandler = (expense) => {
    console.log("From App.js", expense);
    setExpenseList((prevState) => {
      return [
        <li>
          <ExpenseItem
            title={expense.title}
            price={expense.amount}
            date={new Date(expense.date)}
          />
        </li>,
        ...prevState,
      ];
    });
  };

  //todo: Make the sort button work
  // const sort = () => {
  //   setExpenseList((prevState) => {
  //     const ps = prevState.sort((a, b) => {
  //       return a - b;
  //     });
  //     return ps;
  //   });
  // };
  return (
    <div>
      <div className="title-text">Expense Tracker</div>
      <NewExpense onNewExpense={expenseDataHandler} />
      <Expenses expenses={expenseList} />
    </div>
  );
};
export default App;
