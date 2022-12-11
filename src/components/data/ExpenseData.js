import expenseItemObj from "../models/ExpenseItemObj";
const rand = () => {
  return Math.floor(Math.random() * 9999 + 1000);
};

// const expenseItemObj = (title, amount, date) => {
//   // Can not omit curly brackets when returning object literals
//   return {
//     id: rand(),
//     title: title,
//     amount: amount,
//     date: date,
//   };
// };

// Hard coded data to populate the UI
const expenseData = [
  expenseItemObj("Coffee", 12.46, new Date("2022", "11", "04")),
  expenseItemObj("Food", 13.46, new Date("2021", "11", "04")),
  expenseItemObj("socks", 8.46, new Date("2019", "11", "06")),
  expenseItemObj("misc", 25.46, new Date("2021", "11", "09")),
];

// for (let i = 0; i > expenseData.length; i++) {

// }

// console.log(
//   expenseData.filter((expense) => expense.date.getFullYear() === 2022)
// );

export default expenseData;
