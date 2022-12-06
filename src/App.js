import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => (
  <div>
    <div className="title-text">Expense Tracker</div>
    <NewExpense />
    <Expenses />
  </div>
);
export default App;
