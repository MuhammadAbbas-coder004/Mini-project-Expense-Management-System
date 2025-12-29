import React from 'react';

const ExpenseList = ({ transactions }) => {
  return (
    <>
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">📋 Expense List</h2>

        {transactions.map((item, index) => {
          return (
            <div key={index} className="space-y-4">
              {/* Expense Card */}
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-50 via-pink-50 to-yellow-50 rounded-xl shadow-md transform transition duration-300 hover:scale-105">
                <div>
                  <p className="font-semibold text-gray-900 text-lg">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.category} • {item.date}</p>
                </div>

                <div className="flex items-center gap-4">
                  {/* Amount Box with Color & Transparent */}
                  <div
                    className={`px-3 py-1 font-bold text-lg text-white rounded-[8px] ${
                      item.type === "CashIn"
                        ? "bg-green-500 bg-opacity-30"
                        : "bg-red-500 bg-opacity-30"
                    }`}
                  >
                    ${item.amount}
                  </div>

                  <button className="bg-blue-500 text-white px-3 py-1 rounded-lg shadow-sm hover:bg-blue-600 transition">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded-lg shadow-sm hover:bg-red-600 transition">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ExpenseList;
