import React, { useState } from 'react';
import Summary from './components/Summary';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import SortUI from './components/SortUI';
import CategoryTotals from './components/CategoryTotals';

const Expense = () => {
  // State for tracking Cash In, Cash Out and Balance
  const [cashIn, setCashIn] = useState(0);
  const [cashOut, setCashOut] = useState(0);
  const [balance, setBalance] = useState(0);

  // State for all transactions
  const [transactions, setTransactions] = useState([]);

  //  State for sort option
  const [sort, setSortby] = useState("");

  // ➕ Function to handle adding a new transaction
  const hendleTransction = (data) => {
    if (data.type === "CashIn") {
      setCashIn(cashIn + data.amount); // Update total Cash In
      setBalance(balance + data.amount); // Update balance
    } else if (data.type === "CashOut") {
      setCashOut(cashOut + data.amount); // Update total Cash Out
      setBalance(balance - data.amount); // Update balance
    }

    // Add transaction to the transactions array
    setTransactions([...transactions, data]);
  };

  //  Function to delete a transaction
  const hendleDelete = (index) => {
    const removeExpense = transactions.filter((item, idx) =>
      idx === index ? false : true
    );
    setTransactions(removeExpense);
  };

  //  Function to edit a transaction
  const hendleEdit = (index) => {
    const updateExpense = [...transactions];

    // Prompt user for new values
    const newName = prompt(
      "Edit your expense name",
      transactions[index].name
    );
    const newAmount = prompt(
      "Edit your expense amount",
      transactions[index].amount
    );
    const newCategory = prompt(
      "Edit your expense category",
      transactions[index].category
    );
    const newDate = prompt(
      "Edit your expense date",
      transactions[index].date
    );

    // Update the transaction in array
    updateExpense.splice(index, 1, {
      ...transactions[index],
      name: newName,
      amount: Number(newAmount),
      category: newCategory,
      date: newDate,
    });

    setTransactions(updateExpense);
  };

  // Function to sort transactions
  const sortedTransactions = () => {
    let sortedTransactions = [...transactions];

    // Sort by amount
    if (sort === "amount") {
      sortedTransactions.sort((a, b) => a.amount - b.amount);
    }

    // Sort by date
    if (sort === "date") {
      sortedTransactions.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
    }

    return sortedTransactions;
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-4">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 drop-shadow-md">
            💰 Expense Management
          </h1>
        </header>

        <div className="max-w-6xl mx-auto space-y-6">
          {/* Summary of Cash In, Cash Out and Balance */}
          <Summary cashIn={cashIn} cashOut={cashOut} balance={balance} />

          {/* Form to add new transactions */}
          <ExpenseForm
            hendleTransction={hendleTransction}
            balance={balance}
          />

          {/* Sort UI for transactions */}
          <SortUI setSortby={setSortby} />

          {/* List of all transactions with edit/delete options */}
          <ExpenseList
            transactions={sortedTransactions()}
            hendleDelete={hendleDelete}
            hendleEdit={hendleEdit}
          />

          {/* Totals for each category */}
          <CategoryTotals transactions={transactions} />
        </div>
      </div>
    </>
  );
};

export default Expense;
