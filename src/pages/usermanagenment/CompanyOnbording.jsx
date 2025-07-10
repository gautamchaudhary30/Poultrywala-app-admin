import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    verified: "Pending Review",
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
    verified: "Verified On-Site",
  },
];

export default function CompanyOnboarding() {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const navigate = useNavigate();

  const openCompanyRegistrationForm = () => {
    navigate("/company-registration");
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Companies Onboarded</h1>
        <button
          onClick={openCompanyRegistrationForm}
          className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
        >
          + New Company Registration
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-slate-200 dark:border-slate-700">
          <thead className="bg-slate-100 dark:bg-slate-800">
            <tr>
              <th className="px-4 py-2 text-left">Company Name</th>
              <th className="px-4 py-2 text-left">Contact Person</th>
              <th className="px-4 py-2 text-left">Scale</th>
              <th className="px-4 py-2 text-left">Farms Managed</th>
              <th className="px-4 py-2 text-left">Production Volume</th>
              <th className="px-4 py-2 text-left">Service Area</th>
              <th className="px-4 py-2 text-left">Documents</th>
              <th className="px-4 py-2 text-left">Verification</th>
            </tr>
          </thead>
          <tbody>
            {mockCompanies.map((company) => (
              <tr key={company.id} className="border-t dark:border-slate-700">
                <td className="px-4 py-2">{company.name}</td>
                <td className="px-4 py-2">{company.contactPerson}</td>
                <td className="px-4 py-2">{company.scale}</td>
                <td className="px-4 py-2">{company.farmsManaged}</td>
                <td className="px-4 py-2">{company.productionVolume}</td>
                <td className="px-4 py-2">{company.serviceArea}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => setSelectedCompany(company)}
                    className="text-blue-600 hover:underline"
                  >
                    View Documents
                  </button>
                </td>
                <td className="px-4 py-2">{company.verified}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedCompany && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-slate-900 p-6 rounded shadow-md max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Documents</h2>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>
                <strong>Registration:</strong>{" "}
                {selectedCompany.documents.registration || "Not Uploaded"}
              </li>
              <li>
                <strong>Bank:</strong>{" "}
                {selectedCompany.documents.bank || "Not Uploaded"}
              </li>
              <li>
                <strong>License:</strong>{" "}
                {selectedCompany.documents.license || "Not Uploaded"}
              </li>
              <li>
                <strong>FSSAI:</strong>{" "}
                {selectedCompany.documents.fssai || "Not Applicable"}
              </li>
            </ul>
            <div className="mt-4 text-right">
              <button
                onClick={() => setSelectedCompany(null)}
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
