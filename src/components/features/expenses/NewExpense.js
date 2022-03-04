import React from "react";
import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.css";
import { v4 as uuidv4 } from "uuid";

export const NewExpense = ({ addExpense }) => {
  const onSaveNewExpense = (data) => {
    const expenseData = {
      ...data,
      id: uuidv4(), // generates a unique id
    };
    addExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSave={onSaveNewExpense} />
    </div>
  );
};
