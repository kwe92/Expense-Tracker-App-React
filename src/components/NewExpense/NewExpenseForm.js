import React from "react";
import FormHandlers from "./FormHandlers";
import { useState } from "react";
import "./NewExpenseForm.css";
import ExpenseItemModel from "../models/ExpenseItemModel";

const _rand = () => Math.floor(Math.random() * 9999 + 1000);

const NewExpenseForm = (props) => {
  const inputObj = new ExpenseItemModel(_rand(), "", "", "").toObject();

  // {
  //   id: some_random_number
  //   title: "",
  //   amount: "",
  //   date: "",
  // };
  const [userInput, setUserInput] = useState(inputObj);
  console.log("On Render", userInput);
  return (
    <form
      onSubmit={(event) => {
        FormHandlers.submitHandler(event, setUserInput, inputObj);
      }}
    >
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={userInput.title}
            onChange={(event) => {
              const title = event.target.value;
              FormHandlers.titleHandler(title, setUserInput);
            }}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={userInput.amount}
            onChange={(event) => {
              const amount = event.target.value;
              FormHandlers.amountHandler(amount, setUserInput);
            }}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={userInput.date}
            onChange={(event) => {
              const date = event.target.value;
              FormHandlers.dateHandler(date, setUserInput);
            }}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={() => console.log(userInput)}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
