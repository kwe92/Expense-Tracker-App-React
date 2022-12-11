import React from "react";
import "./NewExpenseForm.css";

const AmountField = (props) => (
  <div className="new-expense__control">
    <label>Amount</label>
    <input
      type="number"
      id="amount"
      name="amount"
      value={props.input.amount}
      onChange={props.onChange}
    ></input>
  </div>
);

export default AmountField;
