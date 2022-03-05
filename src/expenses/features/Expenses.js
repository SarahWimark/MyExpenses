import React, { useState } from "react";
import { ExpenseItem } from "../components/ExpenseItem";
import { Card } from "../../components/UI/Card";
import { ExpenseFilter } from "../components/ExpenseFilter";

import "./Expenses.css";

export const Expenses = ({ expenses }) => {
  const [year, setYear] = useState(2020);

  const onYearChange = (year) => {
    setYear(year);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <>
      <Card className="expenses">
        <ExpenseFilter value={year} onYearChange={onYearChange} />
        {filteredExpenses.map((expense) => (
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
