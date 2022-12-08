import ExpenseItemModel from "../models/ExpenseItemModel";

// Hard coded data to populate the UI
const fetchExpenses = () => {
  const expenses = [
    new ExpenseItemModel(1001, "Coffee", 12.46, new Date("2022", "11", "04")),
    new ExpenseItemModel(1002, "Food", 13.46, new Date("2022", "11", "04")),
    new ExpenseItemModel(1003, "socks", 8.46, new Date("2022", "11", "06")),
    new ExpenseItemModel(1004, "misc", 25.46, new Date("2022", "11", "09")),
  ];
  return expenses;
};

export default fetchExpenses;

// const expenses = [
//   {
// id: 1001,
// title: "Coffee",
// price: 12.46,
// date: new Date("2022", "11", "04"),
//   },
//   {
// id: 1002,
// title: "Food",
// price: 13.46,
// date: new Date("2022", "11", "04"),
//   },
//   {
// id: 1003,
// title: "socks",
// price: 8.46,
// date: new Date("2022", "11", "06"),
//   },
//   {
// id: 1004,
// title: "misc",
// price: 25.46,
// date: new Date("2022", "11", "09"),
//   },
// ];
