import React,{ useState } from 'react';
import './App.css';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

const expenseItems = [ { 
  id:"1",
  title: "Car Expenses",
  price:350,
  date: new Date(2020, 7, 4)
},
{
  id:"2",
  title:"Bike Insurance",
  price:450,
  date: new Date(2020, 1, 14)
},{
  id:"3",
  title:"Health Insurance",
  price:500,
  date: new Date(2021, 5, 19)
}
]

const  App = () => {
  const [expensess, newExpense] = useState(expenseItems);

const addExpenseHandler = (expenseData) => {
  newExpense(prevExpenses => {
    return [expenseData,...prevExpenses]
  })

}

  return (
    <div className="App">
      <NewExpense newExpense={addExpenseHandler}/>
      <Expenses expenses={expensess}/>
    </div>
  );
}

export default App;
