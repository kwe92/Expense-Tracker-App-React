import React from "react";
import "./NewExpenseForm.css";
//TODO: Move the date input field into this module

const DateField = (props) => {
  return (
    <div className="new-expense__control">
      <label>Date</label>
      <input
        type="date"
        id="date"
        name="date"
        value={props.input.date}
        onChange={props.onChange}
      ></input>
    </div>
  );
};

export default DateField;
