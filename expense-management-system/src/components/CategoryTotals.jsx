import React from 'react';

const CategoryTotals = ({ transactions }) => {
  const categories = [
    "Food", "Travel", "Shopping", "Bills",
    "Entertainment", "Petrol", "Canteen", "Rent"
  ];

  const bgColors = [
    "bg-green-100", "bg-blue-100", "bg-purple-100", "bg-yellow-100",
    "bg-pink-100", "bg-indigo-100", "bg-orange-100", "bg-gray-100"
  ];

  const emojis = ["🍔", "✈️", "🛍️", "🧾", "🎬", "⛽", "🍽️", "🏠"];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">📊 Category Totals</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category, idx) => {
          const filteredTransactions = transactions.filter(item =>
            item.category.includes(category)
          );
          const total = filteredTransactions.reduce((sum, item) => sum + item.amount, 0);

          return (
            <div
              key={idx}
              className={`${bgColors[idx]} p-4 rounded-xl text-center font-bold`}
            >
              {emojis[idx]} {category}: ${total}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryTotals;
