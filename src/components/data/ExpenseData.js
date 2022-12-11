import expenseItemObj from "../models/ExpenseItemObj";

// Returns a list of Expense Objects
const expenseData = [
  expenseItemObj("Coffee", 12.46, new Date("2022", "11", "04")),
  expenseItemObj("Food", 13.46, new Date("2021", "11", "04")),
  expenseItemObj("socks", 8.46, new Date("2019", "11", "06")),
  expenseItemObj("misc", 25.46, new Date("2021", "11", "09")),
];

export default expenseData;
