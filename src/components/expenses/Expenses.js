import fetchExpenses from "../data/ExpenseData.js";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  // Array of expense objects
  const expenses = fetchExpenses();

  // Turns each ExpenseItemModel into an
  // ExpenseItem custom HTML element wrapped in an <li> element tag
  const listExpenseItem = expenses.map((expenseItem) => (
    <li key={expenseItem.id}>
      <ExpenseItem
        title={expenseItem.title}
        price={expenseItem.amount}
        date={expenseItem.date}
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
