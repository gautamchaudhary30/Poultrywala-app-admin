import { useState } from "react";

const mockTraders = [
  {
    id: 1,
    name: "Rajesh Sharma",
    businessName: "FreshFarm Poultry",
    phone: "9876543210",
    email: "rajesh@example.com",
    address: "123 Main Road, Indore",
    businessAddress: "Farm Area, Dewas",
    bankDetails: {
      accountHolder: "Rajesh Sharma",
      accountNumber: "1234567890",
      ifsc: "SBIN0001234",
      bankName: "State Bank of India",
    },
  },
  {
    id: 1,
    name: "Mukesh Sharma",
    businessName: "FreshFarm Poultry",
    phone: "9876543210",
    email: "mukesh@example.com",
    address: "123 Main Road, Indore",
    businessAddress: "Farm Area, Dewas",
    bankDetails: {
      accountHolder: "Mukesh Sharma",
      accountNumber: "1234567890",
      ifsc: "SBIN0001234",
      bankName: "State Bank of India",
    },
  },
  {
    id: 1,
    name: "Ashok Sharma",
    businessName: "FreshFarm Poultry",
    phone: "9876543210",
    email: "ashok@example.com",
    address: "123 Main Road, Indore",
    businessAddress: "Farm Area, Dewas",
    bankDetails: {
      accountHolder: "Ashok Sharma",
      accountNumber: "1234567890",
      ifsc: "SBIN0001234",
      bankName: "State Bank of India",
    },
  },
  // Add more mock traders as needed
];

export default function AllTraders() {
  const [selectedTrader, setSelectedTrader] = useState(null);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">All Traders</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-slate-200 dark:border-slate-700">
          <thead className="bg-slate-100 dark:bg-slate-800">
            <tr>
              <th className="px-4 py-2 text-left">Trader Name</th>
              <th className="px-4 py-2 text-left">Business Name</th>
              <th className="px-4 py-2 text-left">Phone</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Address</th>
              <th className="px-4 py-2 text-left">Business Address</th>
              <th className="px-4 py-2 text-left">Bank Details</th>
            </tr>
          </thead>
          <tbody>
            {mockTraders.map((trader) => (
              <tr key={trader.id} className="border-t dark:border-slate-700">
                <td className="px-4 py-2">{trader.name}</td>
                <td className="px-4 py-2">{trader.businessName}</td>
                <td className="px-4 py-2">{trader.phone}</td>
                <td className="px-4 py-2">{trader.email}</td>
                <td className="px-4 py-2">{trader.address}</td>
                <td className="px-4 py-2">{trader.businessAddress}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => setSelectedTrader(trader)}
                    className="text-blue-600 hover:underline"
                  >
                    View Bank Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Bank Details */}
      {selectedTrader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-slate-900 p-6 rounded shadow-md max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Bank Details</h2>
            <p><strong>Account Holder:</strong> {selectedTrader.bankDetails.accountHolder}</p>
            <p><strong>Account Number:</strong> {selectedTrader.bankDetails.accountNumber}</p>
            <p><strong>IFSC:</strong> {selectedTrader.bankDetails.ifsc}</p>
            <p><strong>Bank Name:</strong> {selectedTrader.bankDetails.bankName}</p>

            <div className="mt-4 text-right">
              <button
                onClick={() => setSelectedTrader(null)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
