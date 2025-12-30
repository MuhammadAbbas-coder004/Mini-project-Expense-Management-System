import React, { useState } from 'react';
import Summary from './components/Summary';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import SortUI from './components/SortUI';
import CategoryTotals from './components/CategoryTotals';

const App = () => {
const [cashIn, setCashIn] = useState(0);  
const [cashOut, setCashOut] = useState(0); 
const [balance, setBalance] = useState(0);
const [transactions, setTransactions] = useState([]);




const hendleTransction = (data) => {
if (data.type === "CashIn") {
      setCashIn(cashIn + data.amount);
      setBalance(balance + data.amount);
    } else if (data.type === "CashOut") {
      setCashOut(cashOut + data.amount);
      setBalance(balance - data.amount);
    }

    setTransactions([...transactions, data]);
}


const hendleDelete = (index) => {
  const removeExpense = transactions.filter((item, idx) => 
    idx === index ? false : true
  );
  setTransactions(removeExpense);
}

const hendleEdit = (index) => {
  const updateExpense = [...transactions]
  const newName = prompt("Edit your expense name", transactions[index].name)
  const newAmount = prompt("Edit your expense amount", transactions[index].amount)
  const newCategory = prompt("Edit your expense category", transactions[index].category)
  const newDate = prompt("Edit your expense date",transactions[index].date)
  
  updateExpense.splice(index, 1, {
    name: newName,
    amount: Number(newAmount),
    category: newCategory,
    date: newDate,
  })
  
  setTransactions(updateExpense)
}


  return (
<>

 <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-4">
      <header className="text-center mb-8">
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 drop-shadow-md">
          💰 Expense Management
        </h1>
      </header>

      <div className="max-w-6xl mx-auto space-y-6">
        <Summary  cashIn={cashIn} cashOut={cashOut} balance={balance}/>
        <ExpenseForm hendleTransction = {hendleTransction} balance = {balance} />
        <SortUI />
        <ExpenseList transactions = {transactions} hendleDelete = {hendleDelete}
        hendleEdit = {hendleEdit}
        />
        <CategoryTotals />
      </div>
    </div>
</>
  );
};

export default App;
