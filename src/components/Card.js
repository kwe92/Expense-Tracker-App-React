import "./Card.css";

// Composition
//    - Using composition to keep code DRY and combine component logic
//    - In this example some css from Expenses.css and ExpenseItem.css was combined

const Card = (props) => {
  const _class = props.className;
  return <div class={"card " + _class}>{props.children}</div>;
};

export default Card;
