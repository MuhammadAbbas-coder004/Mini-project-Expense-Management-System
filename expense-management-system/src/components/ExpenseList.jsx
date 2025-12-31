import React from 'react';

const ExpenseList = ({ transactions, hendleDelete, hendleEdit }) => {
  return (
    <>
      {/* Container for the Expense List */}
      <div className="bg-white/30 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          📋 Expense List
        </h2>

        {/* Transactions */}
        <div className="space-y-4">
          {transactions.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col md:flex-row justify-between items-start md:items-center p-4
                  bg-white/20 backdrop-blur-md
                  rounded-[8px] border border-white/30
                  shadow-md transition duration-300 hover:scale-[1.02] overflow-hidden"
              >
                {/* Left: Name, Category & Date */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 text-lg truncate">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-600 truncate">
                    {item.category} • {item.date}
                  </p>
                </div>

                {/* Right: Amount and Buttons */}
                <div className="flex flex-wrap md:flex-nowrap items-center gap-3 mt-2 md:mt-0">
                  {/* Amount Box */}
                  <div
                    className={`px-3 py-1 rounded-[8px] font-bold
                      backdrop-blur-md border
                      ${
                        item.type === "CashIn"
                          ? "bg-green-500/20 text-green-700 border-green-500/30"
                          : "bg-red-500/20 text-red-700 border-red-500/30"
                      }`}
                  >
                    ${item.amount}
                  </div>

                  {/* Edit Button */}
                  <button
                    className="px-3 py-1 rounded-[10px] bg-blue-400/20 backdrop-blur-md border border-blue-400/20 text-blue-700 font-medium hover:bg-blue-500/30 transition"
                    onClick={() => hendleEdit(index)}
                  >
                    Edit
                  </button>

                  {/* Delete Button */}
                  <button
                    className="px-3 py-1 rounded-[8px] bg-red-500/20 backdrop-blur-md border border-red-500/30 text-red-700 font-medium hover:bg-red-500/30 transition"
                    onClick={() => hendleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ExpenseList;
