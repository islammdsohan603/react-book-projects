import React from 'react';

const ProgressBar = ({ total = 0, completed = 0 }) => {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="w-full bg-white p-6 rounded-2xl shadow-md">
      {/* Title */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">Reading Progress</h2>
        <span className="text-sm text-gray-500">{percentage}%</span>
      </div>

      {/* Bar */}
      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      {/* Info */}
      <div className="flex justify-between mt-3 text-sm text-gray-600">
        <span>{completed} Read</span>
        <span>{total} Total</span>
      </div>
    </div>
  );
};

export default ProgressBar;
