import { useState } from "react";

const mockRates = [
  {
    id: 1,
    date: "2025-06-04",
    managerName: "Rohit Sharma",
    rate: 105,
    companyName: "PoultryWala Pvt Ltd",
    branchName: "Indore North",
  },
  {
    id: 2,
    date: "2025-06-04",
    managerName: "Sneha Mehta",
    rate: 107,
    companyName: "Golden Chicken Co.",
    branchName: "Bhopal Central",
  },
  {
    id: 3,
    date: "2025-06-05",
    managerName: "Rohit Sharma",
    rate: 110,
    companyName: "PoultryWala Pvt Ltd",
    branchName: "Indore North",
  },
];

export default function BroilerRates() {
  const [selectedDate, setSelectedDate] = useState("");

  // Filtered data by selected date
  const filteredRates = selectedDate
    ? mockRates.filter((rate) => rate.date === selectedDate)
    : mockRates;

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">
        Broiler Rate Updates
      </h1>

      {/* Date Filter */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center gap-4">
        <label className="font-medium text-slate-700 dark:text-slate-200">
          Filter by Date:
        </label>
        <input
          type="date"
          className="input input-bordered input-sm w-48"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-auto rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
        <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
          <thead className="bg-slate-100 dark:bg-slate-800">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-slate-700 dark:text-slate-200">
                Date
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-slate-700 dark:text-slate-200">
                Booking Manager
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-slate-700 dark:text-slate-200">
                Company Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-slate-700 dark:text-slate-200">
                Branch Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-slate-700 dark:text-slate-200">
                Rate (₹/kg)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {filteredRates.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-6 text-center text-slate-500 dark:text-slate-400"
                >
                  No broiler rates found for selected date.
                </td>
              </tr>
            ) : (
              filteredRates.map((rate) => (
                <tr key={rate.id}>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">
                    {rate.date}
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">
                    {rate.managerName}
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">
                    {rate.companyName}
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">
                    {rate.branchName}
                  </td>
                  <td className="px-4 py-3 text-sm font-semibold text-green-600 dark:text-green-400">
                    ₹{rate.rate}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
