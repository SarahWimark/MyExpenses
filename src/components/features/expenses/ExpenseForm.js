import React, { useState } from "react";
import "./ExpenseForm.css";

export const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const onTitleChange = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  const onAmountChange = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  };

  const onDateChange = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };

  return (
    <form action="">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" onChange={onTitleChange} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            min={0.01}
            step={0.01}
            onChange={onAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            min="2019-01-01"
            max="2024-12-31"
            onChange={onDateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};
