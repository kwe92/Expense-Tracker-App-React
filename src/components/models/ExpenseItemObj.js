const rand = () => Math.floor(Math.random() * 9999 + 1000);

const expenseItemObj = (title, amount, date) => {
  // Can not omit curly brackets when returning object literals
  return {
    id: rand(),
    title: title,
    amount: amount,
    date: date,
  };
};

export default expenseItemObj;
