import React from "react";
import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const newExpenseDataHandler = (enteredExpenseData) =>
    props.onNewExpense(enteredExpenseData);

  return (
    <div className="new-expense">
      <NewExpenseForm onSubmit={newExpenseDataHandler} sort={props.sort} />
    </div>
  );
};

export default NewExpense;
