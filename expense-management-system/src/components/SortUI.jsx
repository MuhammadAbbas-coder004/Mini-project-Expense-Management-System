import React from 'react'

const SortUI = ({setSortby}) => {
  return (
    <>
<div className="bg-white p-6 rounded-2xl shadow-lg flex items-center gap-4">
  <label className="font-semibold text-gray-700">Sort By:</label>

  <select
  onChange={(event) => setSortby(event.target.value)}
    className="
      border p-2 rounded-lg bg-white
      transition-transform duration-300
      hover:scale-105 hover:shadow-md
      focus:ring-2 focus:ring-purple-400
      focus:border-purple-400
    "
  >
    <option value="">Select</option>
    <option value="amount">Amount</option>
    <option value="date">Date</option>
  </select>
</div>

    </>
  )
}

export default SortUI