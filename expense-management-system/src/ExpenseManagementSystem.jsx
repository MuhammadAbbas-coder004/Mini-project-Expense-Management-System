import React from 'react'

const ExpenseManagementSystem = () => {
  return (
  <>
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 p-6 flex flex-col items-center">
      {/* Title */}
      <h1 className="text-4xl font-extrabold mb-8 text-gray-800 text-center drop-shadow-md">
        💸 Expense Management System
      </h1>

      {/* Add Expense Section */}
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-3xl p-8 mb-8 border-t-4 border-blue-500">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2 border-gray-200">
          Add New Expense
        </h2>

        {/* Placeholder UI elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="Expense Name"
            className="border-2 border-gray-200 rounded-2xl p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition"
            disabled
          />
          <input
            type="number"
            placeholder="Amount"
            className="border-2 border-gray-200 rounded-2xl p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition"
            disabled
          />
          <input
            type="date"
            className="border-2 border-gray-200 rounded-2xl p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition"
            disabled
          />
          <select
            className="border-2 border-gray-200 rounded-2xl p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition"
            disabled
          >
            <option>Category</option>
          </select>
        </div>

        <button
          className="mt-6 w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-4 rounded-2xl font-bold shadow-lg hover:scale-105 transform transition duration-300"
          disabled
        >
          Add Expense
        </button>
      </div>

      {/* Expense List Section */}
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-3xl p-8 mb-8 border-t-4 border-indigo-500">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2 border-gray-200">
          Expense List
        </h2>

        <div className="text-gray-400 text-center p-10 border-2 border-dashed border-gray-300 rounded-2xl bg-gray-50">
          No expenses added yet
        </div>
      </div>

      {/* Total Expense Section */}
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-3xl p-8 mb-12 text-center border-t-4 border-green-500">
        <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2 border-gray-200">
          Total Expense
        </h2>
        <p className="text-4xl font-extrabold text-green-600 mt-4">💰 $0</p>
      </div>
    </div>
  
  </>
  )
}

export default ExpenseManagementSystem