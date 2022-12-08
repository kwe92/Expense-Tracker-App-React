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

  static fromObj(obj) {
    return new ExpenseItemModel(
      obj["id"],
      obj["title"],
      obj["amount"],
      obj["date"]
    );
  }
}

export default ExpenseItemModel;
