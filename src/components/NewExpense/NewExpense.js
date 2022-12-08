import React from "react";
import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";

const newExpenseDataHandler = (enteredExpenseData) => {
  const expenseData = enteredExpenseData;
  console.log(expenseData);
};

const NewExpense = () => (
  <div className="new-expense">
    <NewExpenseForm onSubmit={newExpenseDataHandler} />
  </div>
);

export default NewExpense;
