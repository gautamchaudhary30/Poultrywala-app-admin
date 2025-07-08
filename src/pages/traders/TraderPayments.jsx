import { useState } from "react";

const mockPayments = [
  {
    id: 1,
    date: "2025-06-04",
    traderBusinessName: "Singh Poultry Traders",
    companyName: "PoultryWala Pvt Ltd",
    totalAmount: 25000,
    completedAmount: 20000,
    pendingAmount: 5000,
  },
  {
    id: 2,
    date: "2025-06-04",
    traderBusinessName: "Mishra Broilers",
    companyName: "Golden Eggs Ltd",
    totalAmount: 18000,
    completedAmount: 18000,
    pendingAmount: 0,
  },
  {
    id: 3,
    date: "2025-06-05",
    traderBusinessName: "Sharma Traders",
    companyName: "ChickFarm Co.",
    totalAmount: 30000,
    completedAmount: 15000,
    pendingAmount: 15000,
  },
];

export default function TraderPayments() {
  const [selectedDate, setSelectedDate] = useState("");

  const filteredPayments = selectedDate
    ? mockPayments.filter((payment) => payment.date === selectedDate)
    : mockPayments;

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">
        Trader Payments
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
              <th className="px-4 py-2 text-left text-sm font-medium text-slate-700 dark:text-slate-200">Date</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-slate-700 dark:text-slate-200">Trader Business</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-slate-700 dark:text-slate-200">Company Name</th>
              <th className="px-4 py-2 text-center text-sm font-medium text-slate-700 dark:text-slate-200">Total</th>
              <th className="px-4 py-2 text-center text-sm font-medium text-green-600">Completed</th>
              <th className="px-4 py-2 text-center text-sm font-medium text-yellow-500">Pending</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {filteredPayments.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-slate-500 dark:text-slate-400">
                  No payments found for selected date.
                </td>
              </tr>
            ) : (
              filteredPayments.map((payment) => (
                <tr key={payment.id}>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">{payment.date}</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">{payment.traderBusinessName}</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">{payment.companyName}</td>
                  <td className="px-4 py-3 text-center text-sm font-medium text-slate-800 dark:text-white">
                    ₹{payment.totalAmount.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-center text-sm font-semibold text-green-600 dark:text-green-400">
                    ₹{payment.completedAmount.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-center text-sm font-semibold text-yellow-500">
                    ₹{payment.pendingAmount.toLocaleString()}
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
