import React, {useState} from 'react';
import './ExpenseForm.css'
const ExpenseForm = ({onSaveExpenseData}) => {

    const [title, setTitle] = useState("");
    const [price, setAmount] = useState("");
    const[date, setDate] = useState("");
    const [showForm, setShowForm] = useState(false);
    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
    }

    const amountChangehandler = (event) => {
        setAmount(event.target.value)     
    }

  const dateChangehandler = (event) => {
    setDate(event.target.value) 
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expense ={
            title,
            price: +price,
            date: new Date(date)
        }
        onSaveExpenseData(expense);
        setTitle("");
        setAmount("");
        setDate("");
        setShowForm((prevState) =>{
            return !prevState
        })
    }
    const toggleForm = () => {
        setShowForm((prevState) =>{
            return !prevState
        })
    }

    if(!showForm) {
        return <button type="button" onClick={toggleForm}>Add New Expense</button>;
    }
    if(showForm) {
        return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" name="title" onChange={titleChangeHandler} value={title}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" name="price" onChange={amountChangehandler} value={price}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" name="date" onChange={dateChangehandler} value={date}/>
            </div>
        </div>
        
        <div className="new-expense__actions">
            <button type="button" onClick={toggleForm}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
    }
}
export default ExpenseForm;