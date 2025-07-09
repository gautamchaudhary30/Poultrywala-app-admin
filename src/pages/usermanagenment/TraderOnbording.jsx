import { useState } from "react";
import { useNavigate } from "react-router-dom";


// Dummy data: You can add `source` as "Website" or "App"
const mockTraders = [
  {
    id: 1,
    name: "Rajesh Sharma",
    businessName: "FreshFarm Poultry",
    phone: "9876543210",
    email: "rajesh@example.com",
    address: "123 Main Road, Indore",
    businessAddress: "Farm Area, Dewas",
    source: "Website", // 👈 Show where registered from
    bankDetails: {
      accountHolder: "Rajesh Sharma",
      accountNumber: "1234567890",
      ifsc: "SBIN0001234",
      bankName: "State Bank of India",
    },
  },
  {
    id: 2,
    name: "Mukesh Sharma",
    businessName: "FreshFarm Poultry",
    phone: "9876543210",
    email: "mukesh@example.com",
    address: "123 Main Road, Indore",
    businessAddress: "Farm Area, Dewas",
    source: "App",
    bankDetails: {
      accountHolder: "Mukesh Sharma",
      accountNumber: "1234567890",
      ifsc: "SBIN0001234",
      bankName: "State Bank of India",
    },
  },
];

export default function TraderOnbording() {
  const [selectedTrader, setSelectedTrader] = useState(null);

  const navigate = useNavigate();

  // ✅ Step 1: constButton click pe registration form new tab me khule
    const openRegistrationForm = () => {
  navigate("/trader-registration"); // ✅ Opens in same tab without reload
};
 // new tab without reload

  

  return (
    <div className="p-6">
      {/* Header and Button */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Traders Onboarded</h1>

        {/* ✅ Step 2: Button to open new tab with trader registration form */}
        <button
          onClick={openRegistrationForm}
          className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
        >
          + New Trader Registration
        </button>
      </div>

      {/* Trader Table */}
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
              <th className="px-4 py-2 text-left">Registered From</th>
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
                <td className="px-4 py-2">{trader.source}</td>
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
