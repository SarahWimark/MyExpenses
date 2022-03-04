import React from "react";
import { ExpenseItem } from "./ExpenseItem";
import { Card } from "../../UI/Card";
import { ExpenseFilter } from "./ExpenseFilter";

import "./Expenses.css";

export const Expenses = ({ items }) => {
  return (
    <>
      <ExpenseFilter />
      <Card className="expenses">
        {items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
          />
        ))}
      </Card>
    </>
  );
};
