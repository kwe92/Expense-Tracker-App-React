const newExpenseAlert = (input) =>
  alert(
    "Please ensure no field is empty." +
      "\n" +
      "Title: " +
      input.title +
      "\n" +
      "Amount: " +
      input.amount +
      "\n" +
      "Date: " +
      input.date
  );

export default newExpenseAlert;
