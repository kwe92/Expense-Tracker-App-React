import React from "react";
import "./NewExpenseForm.css";

const TitleField = (props) => {
  return (
    <div className="new-expense__control">
      <label>Title</label>
      <input
        type="text"
        id="title"
        name="title"
        // Two way binding
        value={props.input.title}
        onChange={props.onChange}
      ></input>
    </div>
  );
};
export default TitleField;
