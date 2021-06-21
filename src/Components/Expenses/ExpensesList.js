import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';
const expensesList = (props) => {
    if(props.items.length ===0) {
        return <h2 className="expenses-list__fallback">No Expenses</h2>
    }

return(<ul className="expenses-list">
        {
            props.items.map((expense, index) => <ExpenseItem key={expense.id} date={expense.date} title={expense.title} price={expense.price}/> )
        }
    </ul>)
}

export default expensesList;