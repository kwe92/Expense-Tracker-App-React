import React, { useState } from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const [selected, setSelected] = useState("all");
  const selectedHandler = (val) => {
    setSelected(val);
  };
  return (
    <div className={"expenses-filter"}>
      <div className={"expenses-filter__control"}>
        <label>Filter By Year</label>
        <select onChange={selectedHandler}>
          <option value={"all"}>All</option>
          <option value={"2019"}>2019</option>
          <option value={"2020"}>2020</option>
          <option value={"2021"}>2021</option>
          <option value={"2022"}>2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
