import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({newExpense}) => {

    const saveExpenseDatahandler = (expenseData) => {
        const newExpenseData = {
            ...expenseData,
            id: Math.random().toString()
        }
        newExpense(newExpenseData);
    }    
    return (
        <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDatahandler}/> 
        </div>
    )

}
export default NewExpense;