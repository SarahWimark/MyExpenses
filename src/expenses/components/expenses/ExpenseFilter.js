import React from "react";

import "./ExpenseFilter.css";

export const ExpenseFilter = ({ onYearChange, value }) => {
  const onFilterChange = (event) => {
    onYearChange(event.target.value);
  };

  return (
    <div className="expense-filter">
      <div className="expense-filter__control">
        <label>Filter by year</label>
        <select value={value} onChange={onFilterChange}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};
