import React, { useState } from "react";
import { Expenses } from "./expenses/features/Expenses";
import { NewExpense } from "./expenses/features/NewExpense";

const DUMMY_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Book",
    amount: 11.99,
    date: new Date(2022, 3, 1),
  },
  {
    id: "e6",
    title: "Bicycle",
    amount: 500,
    date: new Date(2020, 1, 13),
  },
];

export const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };

  return (
    <div>
      <NewExpense addExpense={addExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
};
