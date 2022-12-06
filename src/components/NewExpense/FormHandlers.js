class FormHandlers {
  static titleHandler = (val, setState) =>
    setState((prevState) => {
      return { ...prevState, title: val };
    });

  static amountHandler = (val, setState) =>
    setState((prevState) => {
      return { ...prevState, amount: val };
    });

  static dateHandler = (val, setState) =>
    setState((prevState) => {
      return { ...prevState, date: val };
    });

  static submitHandler = (event, setState, obj) => {
    event.preventDefault();
    setState(obj);
  };
}

export default FormHandlers;
