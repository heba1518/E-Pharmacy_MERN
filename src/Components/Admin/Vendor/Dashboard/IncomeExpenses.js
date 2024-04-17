import React from 'react';

const IncomeExpenses = () => {
  return (
    <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">Income/Expenses</h2>
      </header>
      <div className="p-3">
        {/* Card content */}
        {/* "Today" group */}
        <div>
          <header className="text-xs uppercase text-gray-500 bg-gray-50 rounded-sm font-semibold p-2">
            Today
          </header>

        </div>
      </div>
    </div>
  );
};

export default IncomeExpenses;
