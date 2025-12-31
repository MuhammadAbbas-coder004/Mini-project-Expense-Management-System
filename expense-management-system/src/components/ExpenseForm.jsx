import React, { useState } from 'react';

const ExpenseForm = ({ hendleTransction, balance }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(""); 
  const [category, setCategory] = useState("");

  // Cash In function
  const cashIn = () => {
    // Required fields: name, amount, date
    if (name === "" || Number(amount) === 0 || date === "") {
      alert("Please enter name, amount and date for Cash In");
      return;
    }

    // Extra check category should not be used for Cash In
    if (category !== "") {
      alert("Category selection is not required for Cash In transactions.");
      return;
    }

    hendleTransction({
      name,
      amount: Number(amount),
      date,
      category: "", 
      type: "CashIn",
    });

    // Reset inputs
    setName("");
    setAmount("");
    setDate("");
    setCategory("");
  };

  const cashOut = () => {
    if (name === "" || Number(amount) === 0 || date === "" || category === "") {
      alert("Please complete all fields before recording a Cash Out transaction.");
      return;
    }

    // Balance check
    if (Number(amount) > balance) {
      alert("Insufficient balance to complete this Cash Out transaction.");
      return;
    }

    hendleTransction({
      name,
      amount: Number(amount),
      date,
      category,
      type: "CashOut",
    });

    // Reset inputs
    setName("");
    setAmount("");
    setDate("");
    setCategory("");
  };

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
          className="border w-full p-3 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:scale-[1.02]"
          onChange={(event) => setName(event.target.value)}
        />

        <input
          value={amount}
          type="number"
          placeholder="Amount"
          className="border w-full p-3 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:scale-[1.02]"
          onChange={(event) => setAmount(event.target.value)}
        />

        <input
          value={date}
          type="date"
          className="border w-full p-3 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:scale-[1.02]"
          onChange={(event) => setDate(event.target.value)}
        />

        <select
          value={category}
          className="border w-full p-3 rounded-lg text-gray-600 transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:scale-[1.02]"
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Select Category</option>
          <option>🍔 Food</option>
          <option>✈️ Travel</option>
          <option>🛍️ Shopping</option>
          <option>💡 Bills</option>
          <option>🎬 Entertainment</option>
          <option>⛽ Petrol</option>
          <option>🍽️ Canteen</option>
          <option>🏠 Rent</option>
        </select>

        {/* Buttons */}
        <div className="flex gap-4 pt-2">
          <button
            className="w-1/2 bg-green-500 text-white py-3 rounded-lg font-bold transition-all duration-300 ease-in-out hover:bg-green-600 hover:scale-105 hover:shadow-lg active:scale-95"
            type="button"
            onClick={cashIn}
          >
            💰 Cash In
          </button>

          <button
            className="w-1/2 bg-red-500 text-white py-3 rounded-lg font-bold transition-all duration-300 ease-in-out hover:bg-red-600 hover:scale-105 hover:shadow-lg active:scale-95"
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
