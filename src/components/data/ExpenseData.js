// Hard coded data to populate the UI

const fetchExpenses = () => {
  const expenses = [
    { title: "Coffee", price: 12.46, date: new Date("2022", "11", "04") },
    { title: "Food", price: 13.46, date: new Date("2022", "11", "04") },
    { title: "socks", price: 8.46, date: new Date("2022", "11", "06") },
    { title: "misc", price: 25.46, date: new Date("2022", "11", "09") },
  ];

  return expenses;
};

export default fetchExpenses;
