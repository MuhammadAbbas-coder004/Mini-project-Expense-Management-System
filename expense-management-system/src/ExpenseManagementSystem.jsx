import React, { useState } from 'react'

const ExpenseManagementSystem = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [expenseData, setExpensedata] = useState([]);

  const hendleSubmit = () => {
    amount > 0 ? setExpensedata([...expenseData, 
      { name, amount, category, date }
    ]) : alert("Please Enter Your Expense")
  }

  const hendleDelete = (index) => {
    const deletedata = window.confirm("are sure you delete your expenese")
    if(deletedata){
      const removeData = expenseData.filter((items, idx) => idx !== index)
      setExpensedata(removeData)
    }
  }

  const hendleEdit = (index) => {
    const newExpenseData = expenseData[index]
    const newName = prompt("Edit your expense name", newExpenseData.name)
    const newAmount = prompt("Edit your expense amount", newExpenseData.amount)
    const newCategory = prompt("Edit your expense category", newExpenseData.category)
    const newDate = prompt("Edit your expense date", newExpenseData.date)

    const updateData = [...expenseData]
    updateData.splice(index, 1, {
      name: newName,
      amount: newAmount,
      category: newCategory,
      date: newDate,
    })
    setExpensedata(updateData);
  }

  // Totelexpense Fnctionlety
  const Totelexpense = expenseData.reduce((acc, crr) => acc + +crr.amount, 0)

  // Categorys Functionlety (exactly tumhara logic)
  const foodTotel = expenseData.filter(val => val.category === "Food")
    .reduce((acc, foodCrr) => acc + +foodCrr.amount, 0)
  const travelTotel = expenseData.filter(val => val.category === "Travel")
    .reduce((acc, travelCrr) => acc + +travelCrr.amount, 0)
  const shoppingTotel = expenseData.filter(val => val.category === "Shopping")
    .reduce((acc, shoppingCrr) => acc + +shoppingCrr.amount, 0)
  const billsTotel = expenseData.filter(val => val.category === "Bills")
    .reduce((acc, billsCrr) => acc + +billsCrr.amount, 0)

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 px-4 py-8 flex flex-col items-center">

        <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-800 text-center drop-shadow-md">
          💸 Expense Management System
        </h1>

        {/* Add  new expense section */}
        <div className="w-full max-w-2xl bg-white shadow-xl rounded-3xl p-6 md:p-8 mb-8 border-t-4 border-blue-500">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2 border-gray-200">
            Add New Expense
          </h2>

          <form
            className="w-full flex flex-col space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              hendleSubmit();
            }}
          >
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              type="text"
              placeholder="Expense Name"
              className="border-2 border-gray-200 rounded-xl p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              type="number"
              placeholder="Amount"
              className="border-2 border-gray-200 rounded-xl p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              value={date}
              onChange={(event) => setDate(event.target.value)}
              type="date"
              className="border-2 border-gray-200 rounded-xl p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="border-2 border-gray-200 rounded-xl p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Category</option>
              <option>Food</option>
              <option>Travel</option>
              <option>Shopping</option>
              <option>Bills</option>
            </select>

            <button
              type="submit"
              className="mt-4 w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition"
            >
              Add Expense
            </button>
          </form>
        </div>

        {/* Expense list */}
        <div className="w-full max-w-2xl bg-white shadow-xl rounded-3xl p-6 md:p-8 mb-8 border-t-4 border-indigo-500">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2 border-gray-200">
            Expense List
          </h2>

          {expenseData.map((item, index) => (
            <div key={index} className="flex justify-between items-center bg-gray-50 p-4 rounded-xl border mb-4">
              <div>
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.category} • {item.date}</p>
              </div>
              <div className="flex items-center gap-4">
                <button onClick={() => hendleDelete(index)} className="bg-red-500 text-white px-4 py-2 rounded-xl hover:scale-105 transition">
                  Delete
                </button>
                <button onClick={() => hendleEdit(index)} className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:scale-105 transition">
                  Edit
                </button>
              </div>
              <div className="text-lg font-bold text-red-500">${item.amount}</div>
            </div>
          ))}

          {expenseData.length === 0 && (
            <div className="text-gray-400 text-center p-10 border-2 border-dashed border-gray-300 rounded-2xl bg-gray-50">
              No expenses added yet
            </div>
          )}
        </div>

        {/* Section Category Totals , Total Section */}
        <div className="w-full max-w-2xl bg-white shadow-xl rounded-3xl p-6 md:p-8 mb-12 text-center border-t-4 border-green-500">
          <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2 border-gray-200">
            Total Expense by Category
          </h2>
          <div className="mt-4 flex justify-between text-lg font-bold text-green-600 mb-6">
            <div>🍔 Food : $ {foodTotel}</div>
            <div>✈️ Travel : $ {travelTotel}</div>
            <div>🛍️ Shopping : $ {shoppingTotel}</div>
            <div>🧾 Bills : $ {billsTotel}</div>
          </div>
          <h2 className="text-2xl font-semibold text-gray-700 border-t pt-2 mt-4">
           Total Expense
          </h2>
          <p className="text-4xl font-extrabold text-green-600 mt-4">
            🪙 $ {Totelexpense}
          </p>
        </div>
      </div>
    </>
  )
}

export default ExpenseManagementSystem;
