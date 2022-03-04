import React, { useState } from "react";
import { ExpenseItem } from "./ExpenseItem";
import { Card } from "../../UI/Card";
import { ExpenseFilter } from "./ExpenseFilter";

import "./Expenses.css";

export const Expenses = ({ items }) => {
  const [year, setYear] = useState(2020);

  const onYearChange = (year) => {
    setYear(year);
  };

  return (
    <>
      <Card className="expenses">
        <ExpenseFilter value={year} onYearChange={onYearChange} />
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
