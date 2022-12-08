import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ul className="list-expenses">{props.expenses}</ul>
    </Card>
  );
};

export default Expenses;
