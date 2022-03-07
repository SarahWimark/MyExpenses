import React, { useState } from "react";
import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.css";
import { v4 as uuidv4 } from "uuid";

export const NewExpense = ({ addExpense }) => {
  const [isEditing, setIsEditing] = useState(false);
  const onSaveNewExpense = (data) => {
    const expenseData = {
      ...data,
      id: uuidv4(), // generates a unique id
    };
    addExpense(expenseData);
  };

  const startEditing = () => {
    setIsEditing(true);
  };

  const stopEditing = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditing}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm onSave={onSaveNewExpense} onCancel={stopEditing} />
      )}
    </div>
  );
};
