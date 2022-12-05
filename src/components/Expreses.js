import fetchExpenses from "../data/ExpenseData";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  // Array of expense objects
  const expenses = fetchExpenses();

  // Turns each expense object into an
  // ExpenseItem custom HTML element wrapped in an <li> element tag
  const listExpenseItem = expenses.map((expense) => (
    <li>
      <ExpenseItem
        title={expense.title}
        price={expense.price}
        date={expense.date}
      />
    </li>
  ));

  // Unorder list of ExpenseItems
  return (
    <Card className="expenses">
      <ul className="list-expenses">{listExpenseItem}</ul>
    </Card>
  );
};

export default Expenses;
