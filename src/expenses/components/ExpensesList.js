import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

export const ExpensesList = ({ expenses }) => {
  if (expenses.length === 0) {
    return <h2 className="expense-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expense-list">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};