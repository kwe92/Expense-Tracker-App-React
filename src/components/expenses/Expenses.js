import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => (
  <Card className="expenses">
    {/* Taakes a list of expense objects */}
    <ul className="list-expenses">{props.expenses}</ul>
  </Card>
);

export default Expenses;
