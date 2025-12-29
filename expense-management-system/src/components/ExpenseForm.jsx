import React, { useState } from 'react';

const ExpenseForm = ({ hendleTransction }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(null);
  const [date, setDate] = useState(""); 
  const [category, setCategory] = useState("");

  const cashIn = () => {
    hendleTransction({
       name, amount: Number(amount), 
       date, category, type: "CashIn" 
      });
  
  }

  const cashOut = () => {
    hendleTransction({ 
      name, amount: Number(amount), 
      date, category, type: "CashOut" });

  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl">
      <h2 className="text-2xl font-bold mb-5 text-gray-800 flex items-center gap-2">
        💰 Expense Tracker
      </h2>

      <form className="space-y-4">
        {/* Expense Inputs */}
        <input
          value={name}
          type="text"
          placeholder="Expense Name"
          className="border w-full p-3 rounded-lg
            transition-all duration-300
            focus:ring-2 focus:ring-blue-400 focus:scale-[1.02]"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          value={amount}
          type="number"
          placeholder="Amount"
          className="border w-full p-3 rounded-lg
            transition-all duration-300
            focus:ring-2 focus:ring-blue-400 focus:scale-[1.02]"
          onChange={(e) => setAmount(e.target.value)}
        />

        <input
          value={date}
          type="date"
          className="border w-full p-3 rounded-lg
            transition-all duration-300
            focus:ring-2 focus:ring-blue-400 focus:scale-[1.02]"
          onChange={(e) => setDate(e.target.value)}
        />

        <select
          value={category}
          className="border w-full p-3 rounded-lg text-gray-600
            transition-all duration-300
            focus:ring-2 focus:ring-blue-400 focus:scale-[1.02]"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Select Category</option>
          <option>🍔 Food</option>
          <option>✈️ Travel</option>
          <option>🛍️ Shopping</option>
          <option>💡 Bills</option>
        </select>

        {/* Buttons */}
        <div className="flex gap-4 pt-2">
          <button
            className="w-1/2 bg-green-500 text-white py-3 rounded-lg font-bold
              transition-all duration-300 ease-in-out
              hover:bg-green-600 hover:scale-105 hover:shadow-lg
              active:scale-95"
            type="button"
            onClick={cashIn}
          >
            💰 Cash In
          </button>

          <button
            className="w-1/2 bg-red-500 text-white py-3 rounded-lg font-bold
              transition-all duration-300 ease-in-out
              hover:bg-red-600 hover:scale-105 hover:shadow-lg
              active:scale-95"
            type="button"
            onClick={cashOut}
          >
            💸 Cash Out
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
