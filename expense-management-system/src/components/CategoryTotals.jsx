import React from 'react';

const CategoryTotals = () => {
  return (
   <>
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        📊 Category Totals
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-green-100 p-4 rounded-xl text-center font-bold">🍔 Food: $0</div>
        <div className="bg-blue-100 p-4 rounded-xl text-center font-bold">✈️ Travel: $0</div>
        <div className="bg-purple-100 p-4 rounded-xl text-center font-bold">🛍️ Shopping: $0</div>
        <div className="bg-yellow-100 p-4 rounded-xl text-center font-bold">🧾 Bills: $0</div>
      </div>
    </div>
   </>
  );
};

export default CategoryTotals;
