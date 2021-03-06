import React from "react";
import { ExpenseDate } from "./ExpenseDate";
import { Card } from "../../components/UI/Card";
import "./ExpenseItem.css";

export const ExpenseItem = ({ date, title, amount }) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item-description">
        <h2>{title}</h2>
        <div className="expense-item-price">${amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
