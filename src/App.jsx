import { useState } from 'react';
import './App.css';
import Header from './components/Header'
import  NewExpense  from './components/NewExpense';

function App() {
  const [expenses, setExpenses] = useState([])

	const addNewExpenseHandler = (newExpense = {}) => {
		setExpenses((prevExpenses) => {
			return [...prevExpenses, newExpense]
		})
	}

  return (
    <div className="App">
      <NewExpense onAddNewExpense={addNewExpenseHandler}/>
    </div>
  ) 
}

export default App;
