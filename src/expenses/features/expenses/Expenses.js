import React, { useState } from "react";
import { ExpenseItem } from "../../components/expenses/ExpenseItem";
import { Card } from "../../../components/UI/Card";
import { ExpenseFilter } from "../../components/expenses/ExpenseFilter";

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
