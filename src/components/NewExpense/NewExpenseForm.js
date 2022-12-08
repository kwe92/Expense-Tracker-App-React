import React from "react";
import FormHandlers from "./FormHandlers";
import { useState } from "react";
import "./NewExpenseForm.css";
import ExpenseItemModel from "../models/ExpenseItemModel";

// return a random number between (1000, 9999) - inclusive??
const _rand = () => Math.floor(Math.random() * 9999 + 1000);

const NewExpenseForm = (props) => {
  // Inital state | Empty ExpenseItemModel Object
  //  useState called once upon inital rendering
  //  ExpenseItemModel is called only twice
  //  initally and on form submission
  const [userInput, setUserInput] = useState(
    new ExpenseItemModel(_rand(), "", "", "").toObject()
  );
  // Log state everytime the component is re rendered
  console.log("On Render", userInput);

  return (
    <form
      // pass event to prevent default behavior
      // pass setState function (the name is arbitrary)
      // pass new Expense type to reset state to an emtpy ExpenseItem Object with an id
      onSubmit={(event) => {
        FormHandlers.submitHandler(
          event,
          setUserInput,
          new ExpenseItemModel(_rand(), "", "", "").toObject()
        );
      }}
    >
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            id="title"
            name="title"
            // Changes value displayed to user in input field
            // Usecase clear input field
            value={userInput.title}
            onChange={(event) => {
              // Nested value from DOM synthetic event object
              const title = event.target.value;
              // Handle setting title state
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
              // Handle setting amount state
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
              // Handle setting date state
              FormHandlers.dateHandler(date, setUserInput);
            }}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        {/* Add Expense Button */}
        <button
          type="submit"
          onClick={() => {
            // Submit if the user object is completely filled out
            if (userInput.title && userInput.amount && userInput.date)
              props.onSubmit(userInput);
            else return;
          }}
        >
          Add Expense
        </button>
        {/* Sort Button */}
        <button
          type="button"
          onClick={() => {
            props.sort();
          }}
        >
          Sort
        </button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
