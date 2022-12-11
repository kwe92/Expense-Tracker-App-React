import React from "react";
import FormHandlers from "./FormHandlers";
import { useState } from "react";
import "./NewExpenseForm.css";
import expenseItemObj from "../models/ExpenseItemObj";
import TitleField from "./TitleField";
import AmountField from "./AmountField";
import DateField from "./DateField";
import newExpenseAlert from "./NewExpenseAlert";

const NewExpenseForm = (props) => {
  const [userInput, setUserInput] = useState(expenseItemObj("", "", ""));

  // Submit if filled | alert if not
  const submit = (input) =>
    input.id && input.title && input.amount && input.date
      ? props.onSubmit(input)
      : newExpenseAlert(input);

  // Log state everytime the component is re rendered
  console.log("On Render", userInput);

  return (
    <form
      // Submit Handler
      onSubmit={(event) =>
        FormHandlers.submitHandler(
          event,
          setUserInput,
          expenseItemObj("", "", "")
        )
      }
    >
      <div className="new-expense__controls">
        <TitleField
          input={userInput}
          //  DOM synthetic event object
          // Handle setting title state
          onChange={(event) => {
            const title = event.target.value;
            FormHandlers.titleHandler(title, setUserInput);
          }}
        />
        <AmountField
          input={userInput}
          onChange={(event) => {
            const amount = event.target.value;
            // Handle setting amount state
            FormHandlers.amountHandler(amount, setUserInput);
          }}
        />
        <DateField
          input={userInput}
          onChange={(event) => {
            const date = event.target.value;
            // Handle setting date state
            FormHandlers.dateHandler(date, setUserInput);
          }}
        />
      </div>
      <div className="new-expense__actions">
        {/* Add Expense Button */}
        <button
          type="submit"
          onClick={() => {
            // Submit if the user object has no empty values
            submit(userInput);
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
