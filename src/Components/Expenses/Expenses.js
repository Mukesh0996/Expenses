import React, {useState} from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './FilterExpense';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [year, setYear] = useState("2021");
    const changeYearHandler = year => {
        setYear(year);
    }
    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === year);
    return (
        <Card className="expenses">
        <ExpensesFilter onyearChange={changeYearHandler} currentYear={year}/><div className="scroll">
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
        </div>
        </Card>
    )
}

export default Expenses;