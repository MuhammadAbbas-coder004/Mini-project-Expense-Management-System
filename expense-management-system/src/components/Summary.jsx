const Summary = ({cashIn, cashOut, balance}) => {
  return (
   <>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-green-500 text-white p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition">
        <h2 className="text-xl font-bold">💵 Cash In</h2>
        <p className="text-3xl mt-2"> {cashIn} </p>
      </div>
      <div className="bg-red-500 text-white p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition">
        <h2 className="text-xl font-bold">💸 Cash Out</h2>
        <p className="text-3xl mt-2"> {cashOut} </p>
      </div>
      <div className="bg-blue-500 text-white p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition">
        <h2 className="text-xl font-bold">🪙 Balance</h2>
        <p className="text-3xl mt-2"> {balance} </p>
      </div>
    </div>
   </>
  );
};

export default Summary;

