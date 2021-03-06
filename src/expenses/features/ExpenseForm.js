import React, { useState } from "react";
import "./ExpenseForm.css";

export const ExpenseForm = ({ onSave, onCancel }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const onDateChange = (event) => {
    setDate(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const expenseData = {
      title,
      amount: +amount,
      date: new Date(date),
    };

    onSave(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="new-expense-controls">
        <div className="new-expense-control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={onTitleChange}
            value={title}
          />
        </div>
        <div className="new-expense-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            min={0.01}
            step={0.01}
            onChange={onAmountChange}
            value={amount}
          />
        </div>
        <div className="new-expense-control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            min="2019-01-01"
            max="2024-12-31"
            onChange={onDateChange}
            value={date}
          />
        </div>
      </div>
      <div className="new-expense-actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
