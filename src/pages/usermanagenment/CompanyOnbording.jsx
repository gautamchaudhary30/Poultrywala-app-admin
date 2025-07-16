import { useState } from "react";
import { useNavigate } from "react-router-dom";

const statusColors = {
  "Verified On-Site": "bg-green-300 text-white-700",
  "Pending": "bg-orange-200 text-yellow-700",
  Declined: "bg-red-200 text-red-700",
};

const mockCompanies = [
  {
    id: 1,
    name: "AgroFresh Pvt Ltd",
    contactPerson: "Sunil Mehta",
    scale: "Large",
    farmsManaged: 12,
    productionVolume: "5000 eggs/day",
    serviceArea: "MP, Maharashtra",
    documents: {
      registration: "CompanyReg123.pdf",
      bank: "BankDetails123.pdf",
      license: "License123.pdf",
      fssai: "FSSAI123.pdf",
    },
    verified: "Pending",
  },
  {
    id: 2,
    name: "Healthy Farms Ltd",
    contactPerson: "Priya Singh",
    scale: "Medium",
    farmsManaged: 5,
    productionVolume: "1500 chickens/day",
    serviceArea: "UP, Bihar",
    documents: {
      registration: "HealthyReg.pdf",
      bank: "HealthyBank.pdf",
      license: "HealthyLicense.pdf",
      fssai: null,
    },
    verified: "Pending",
  },
];

export default function CompanyOnboarding() {
  const [District, setDistrict] = useState(null);
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const openCompanyRegistrationForm = () => {
    navigate("/company-registration");
  };

  const filteredCompanies = mockCompanies.filter((company) => {
    const matchesStatus = status ? company.verified.toLowerCase() === status.toLowerCase() : true;
    const matchesDistrict = District ? company.serviceArea.includes(District) : true;
    return matchesStatus && matchesDistrict;
    
  });

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-semibold dark:text-gray-100">Company Onboarding</h1>
        <button
          onClick={openCompanyRegistrationForm}
          className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
        >
          + New Company Registration
        </button>
      </div>

      <div className="flex flex-col mb-4">
        <div className="flex items-center gap-5 mb-4">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Declined">Declined</option>
          </select>
          <select 
             value={District}
             onChange={(e) => setDistrict(e.target.value)}
             className="p-2 border rounded"
             >
            <option value="">All Districts</option>
            <option value="MP">Bhopal</option>
             </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[1089px] text-sm border border-gray-300 rounded">
          <thead className="bg-slate-100 text-left dark:bg-gray-100">
            <tr>
              <th className="p-4 text-xs">Company Name</th>
              <th className="p-4 text-xs">Head Name</th>
              <th className="p-4 text-xs">Scale</th>
              <th className="p-4 text-xs">Farms Managed</th>
              <th className="p-4 text-xs">Production Volume</th>
              <th className="p-4 text-xs">Service Area</th>
              <th className="p-4 text-xs">Documents</th>
              <th className="p-4 text-xs">Verification</th>
              <th className="p-4 text-xs text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredCompanies.map((company) => (
              <tr key={company.id} className="border-t border-gray-300 dark:text-gray-300 dark:bg-slate-900">
                <td className="p-4">{company.name}</td>
                <td className="p-4">{company.contactPerson}</td>
                <td className="p-4">{company.scale}</td>
                <td className="p-4">{company.farmsManaged}</td>
                <td className="p-4">{company.productionVolume}</td>
                <td className="p-4">{company.serviceArea}</td>
                <td className="p-4">
                  <button
                    onClick={() => setDistrict(company)}
                    className="text-blue-600 hover:underline"
                  >
                    View Documents
                  </button>
                </td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs text-center font-medium ${statusColors[company.verified]}`}>{company.verified}</span>
                </td>
                <td className="p-4 text-center">
                  <div className="font-medium flex gap-1 justify-center">
                    <button className="text-green-600 px-2 py-1 rounded active:text-green-800 active:scale-95">Approve</button>
                    <button className="text-red-600 px-2 py-1 rounded active:text-red-800 active:scale-95">Decline</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4 text-sm">
        <span className="text-left px-2 py-1 dark:text-gray-300">
          Showing {filteredCompanies.length > 0 ? 1 : 0} to {filteredCompanies.length} of {mockCompanies.length} results
        </span>
        <div className="space-x-2 text-right">
          <button className="px-2 py-1 m-2 bg-gray-200 rounded">Previous</button>
          <button className="px-2 py-1 m-2 bg-green-500 text-white rounded">1</button>
          <button className="px-2 py-1 m-2 bg-gray-200 rounded">2</button>
          <button className="px-2 py-1 m-2 bg-gray-200 rounded">Next</button>
        </div>
      </div>
    </div>
  );
}
