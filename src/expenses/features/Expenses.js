import React, { useState } from "react";
import { ExpensesList } from "../components/ExpensesList";
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
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </>
  );
};
