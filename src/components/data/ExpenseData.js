import ExpenseItemModel from "../models/ExpenseItemModel";

// Hard coded data to populate the UI
const expenseData = [
  new ExpenseItemModel(1001, "Coffee", 12.46, new Date("2022", "11", "04")),
  new ExpenseItemModel(1002, "Food", 13.46, new Date("2022", "11", "04")),
  new ExpenseItemModel(1003, "socks", 8.46, new Date("2022", "11", "06")),
  new ExpenseItemModel(1004, "misc", 25.46, new Date("2022", "11", "09")),
];

export default expenseData;
