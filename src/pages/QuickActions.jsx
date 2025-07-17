import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuickActions = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-2">
        {/* Trader Registration */}
        <div className=" h-40 bg-white dark:bg-slate-800 shadow-lg rounded-xl p-6 w-80 flex flex-col justify-between">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Trader Registration
          </h2>
         
          <button
            onClick={() => navigate("/trader-registration")}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
          >
            Register Trader
          </button>
        </div>

        {/* Company Registration */}
        <div className="bg-white dark:bg-slate-800 shadow-lg rounded-xl p-6 w-80 flex flex-col justify-between">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Company Registration
          </h2>
          <button
            onClick={() => navigate("/company-registration")}
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition"
          >
            Register Company
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
