import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  // Handle what year was selected and calls a pointer pass as the property filter
  const selectedHandler = (event) => {
    const date = event.target.value;
    props.filter(date);
  };
  return (
    <div className={"expenses-filter"}>
      <div className={"expenses-filter__control"}>
        <label>Filter: Year</label>
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
