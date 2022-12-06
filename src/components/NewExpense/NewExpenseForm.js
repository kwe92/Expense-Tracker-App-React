import React from "react";
import { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(new Date());

  const titleHandler = (newTitle) => {
    console.log(newTitle);
    setTitle(newTitle);
  };
  const amountHandler = (newAmount) => {
    console.log(newAmount);
    setAmount(newAmount);
  };
  const dateHandler = (newDate) => {
    console.log(newDate);
    setDate(newDate);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={(event) => titleHandler(event.target.value)}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            onChange={(event) => amountHandler(event.target.value)}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            id="date"
            name="date"
            onChange={(event) => dateHandler(event.target.value)}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={() => console.log(title, amount, date)}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
