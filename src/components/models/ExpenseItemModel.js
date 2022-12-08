class ExpenseItemModel {
  constructor(id, title, amount, date) {
    this.id = id;
    this.title = title;
    this.amount = amount;
    this.date = date;
  }

  toObject = () => {
    // Can not omit curly brackets when returning object literals
    return {
      id: this.id,
      title: this.title,
      amount: this.amount,
      date: this.date,
    };
  };
}

export default ExpenseItemModel;
