import React from 'react';

import './FilterExpense.css';

const ExpensesFilter = ({onyearChange, currentYear}) => {

const onYearChange = (event)=>{
  onyearChange(event.target.value);
}

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={currentYear} onChange={onYearChange}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;