import React, { useState } from 'react'

const ExpenseManagementSystem = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [expenseData, setExpensedata] = useState([]);

  const hendleSubmit = () => {
amount > 0 ?  setExpensedata([...expenseData, 
  { name, amount, category, date }
  ]) : alert("Please Enter Your Expense")
   
  }

const hendleDelete = (index)=>{
const deletedata = window.confirm("are sure you delete the your expenese")
const newexpenseData = expenseData.filter((item, idx) => idx !== index)


setExpensedata(newexpenseData)

}



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
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Expense Name"
              className="border-2 border-gray-200 rounded-xl p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              type="number"
              placeholder="Amount"
              className="border-2 border-gray-200 rounded-xl p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              className="border-2 border-gray-200 rounded-xl p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
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

          {expenseData.map((item, index) => {
            return (
            <div key={index}className="flex justify-between items-center bg-gray-50 p-4 rounded-xl border mb-4">
      <div>
      <h3 className="font-semibold text-gray-800">{item.name}</h3>
      <p className="text-sm text-gray-500">{item.category} • {item.date}</p>
      </div>
      <div className="flex items-center gap-4">
      <button onClick={() => hendleDelete(index)} className="bg-red-500 text-white px-4 py-2 rounded-xl hover:scale-105 transition">
      Delete
      </button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:scale-105 transition">
       Edit
      </button>
      </div>
       <div className="text-lg font-bold text-red-500">${item.amount}</div>
       </div>
            )
          })}

          {/* Empty state */}
          {expenseData.length === 0 && (
            <div className="text-gray-400 text-center p-10 border-2 border-dashed border-gray-300 rounded-2xl bg-gray-50">
              No expenses added yet
            </div>
          )}
        </div>

        {/* Total expense */}
        <div className="w-full max-w-2xl bg-white shadow-xl rounded-3xl p-6 md:p-8 mb-12 text-center border-t-4 border-green-500">
          <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2 border-gray-200">
            Total Expense
          </h2>
          <p className="text-4xl font-extrabold text-green-600 mt-4">
            💰 $0
          </p>
        </div>
      </div>
    </>
  )
}

export default ExpenseManagementSystem;
