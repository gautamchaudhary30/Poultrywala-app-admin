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
    serviceArea: "Bhopal, Madhya Pradesh",
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
    serviceArea: "Varanasi, Uttar Pradesh",
    documents: {
      registration: "HealthyReg.pdf",
      bank: "HealthyBank.pdf",
      license: "HealthyLicense.pdf",
      fssai: null,
    },
    verified: "Pending",
  },
  {
    id: 3,
    name: "Eggcellent Farms",
    contactPerson: "Rajesh Kumar",
    scale: "Small",
    farmsManaged: 3,
    productionVolume: "800 eggs/day",
    serviceArea: "Gurgaon, Haryana",
    documents: {
      registration: "EggcellentReg.pdf",
      bank: "EggcellentBank.pdf",
      license: "EggcellentLicense.pdf",
      fssai: "EggcellentFSSAI.pdf",
    },
    verified: "Aprooved",
  },
  {
    id: 4,
    name: "Poultry World",
    contactPerson: "Anita Sharma",
    scale: "Large",
    farmsManaged: 20,
    productionVolume: "10000 eggs/day",
    serviceArea: "Amritsar, Punjab",
    documents: {
      registration: "PoultryWorldReg.pdf",
      bank: "PoultryWorldBank.pdf",
      license: "PoultryWorldLicense.pdf",
      fssai: "PoultryWorldFSSAI.pdf",
    },
    verified: "Declined",
  },
  {
    id: 5,
    name: "FreshEggs Inc",
    contactPerson: "Amit Verma",
    scale: "Medium",
    farmsManaged: 8,
    productionVolume: "3000 eggs/day",
    serviceArea: "Indore, Madhya Pradesh",
    documents: {
      registration: "FreshEggsReg.pdf",
      bank: "FreshEggsBank.pdf",
      license: "FreshEggsLicense.pdf",
      fssai: "FreshEggsFSSAI.pdf",
    },
    verified: "Pending",
  },
  {
    id: 6,
    name: "Golden Poultry",
    contactPerson: "Suman Roy",
    scale: "Large",
    farmsManaged: 15,
    productionVolume: "7000 eggs/day",
    serviceArea: "Nagpur, Maharashtra",
    documents: {
      registration: "GoldenReg.pdf",
      bank: "GoldenBank.pdf",
      license: "GoldenLicense.pdf",
      fssai: null,
    },
    verified: "Pending",
  },
  {
    id: 7,
    name: "Natural Chicks",
    contactPerson: "Rekha Thakur",
    scale: "Small",
    farmsManaged: 4,
    productionVolume: "1200 chickens/day",
    serviceArea: "Ranchi, Jharkhand",
    documents: {
      registration: "NaturalReg.pdf",
      bank: "NaturalBank.pdf",
      license: "NaturalLicense.pdf",
      fssai: "NaturalFSSAI.pdf",
    },
    verified: "Aprooved",
  },
  {
    id: 8,
    name: "Feather Farm",
    contactPerson: "Nikhil Joshi",
    scale: "Medium",
    farmsManaged: 9,
    productionVolume: "3500 eggs/day",
    serviceArea: "Jaipur, Rajasthan",
    documents: {
      registration: "FeatherReg.pdf",
      bank: "FeatherBank.pdf",
      license: "FeatherLicense.pdf",
      fssai: "FeatherFSSAI.pdf",
    },
    verified: "Pending",
  },
  {
    id: 9,
    name: "Urban Hatcheries",
    contactPerson: "Sneha Kapoor",
    scale: "Large",
    farmsManaged: 18,
    productionVolume: "9000 chickens/day",
    serviceArea: "Patna, Bihar",
    documents: {
      registration: "UrbanHatchReg.pdf",
      bank: "UrbanHatchBank.pdf",
      license: "UrbanHatchLicense.pdf",
      fssai: "UrbanHatchFSSAI.pdf",
    },
    verified: "Declined",
  },
  {
    id: 10,
    name: "Green Valley Poultry",
    contactPerson: "Karan Malhotra",
    scale: "Small",
    farmsManaged: 2,
    productionVolume: "600 eggs/day",
    serviceArea: "Kolkata, West Bengal",
    documents: {
      registration: "GreenValleyReg.pdf",
      bank: "GreenValleyBank.pdf",
      license: "GreenValleyLicense.pdf",
      fssai: "GreenValleyFSSAI.pdf",
    },
    verified: "Pending",
  }
];


export default function CompanyOnboarding() {
  const [search, setSearch] = useState("");

  const [District, setDistrict] = useState(null);
  const [state, setState] = useState("");
  const navigate = useNavigate();

  const openCompanyRegistrationForm = () => {
    navigate("/company-registration");
  };

  const filteredCompanies = mockCompanies.filter((company) => {
     const matchesSearch =
      [company.name, company.serviceArea, company.contactPerson,].some((field) =>
        field.toLowerCase().includes(search.toLowerCase())
      );
    const matchesState = state ? company.serviceArea.includes(state): true;
    const matchesDistrict = District ? company.serviceArea.includes(District) : true;

    const isNotAprooved = company.verified !== "Aprooved";
    return matchesSearch && matchesState && matchesDistrict && isNotAprooved;
    
  });

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-semibold dark:text-gray-100">Company Onboarding</h1>
        {/* <button
          onClick={openCompanyRegistrationForm}
          className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
        >
          + New Company Registration
        </button> */}
      </div>

      <div >
        <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <input 
          type="text"
          placeholder="Search companies by name, head name, phone... "
          className="w-full md:w-1/3 p-2 border rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
           />
           <div className="flex gap-2 w-full md:w-auto">
            <select 
             value={District}
             onChange={(e) => setDistrict(e.target.value)}
             className="p-2 border  rounded-lg transition"
             >
            <option value="">All Districts</option>
            <option value="MP">Bhopal</option>
             </select>
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="p-2 border  rounded-lg transition"
          >
            <option value="">All State</option>
            <option value="Rajasthan">Rajsthan</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharastra">Maharashtra</option>

            
          </select>
          
        </div>

        </div>
        
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[1104px] text-sm border border-gray-300 rounded">
          <thead className="bg-slate-100 text-left dark:bg-gray-100">
            <tr>
              <th className="p-4 text-center text-xs">Company Name</th>
              <th className="p-4 text-center text-xs">Head Name</th>
              <th className="p-4 text-center text-xs">Scale</th>
              <th className="p-4 text-center text-xs">Farms Managed</th>
              <th className="p-4 text-center text-xs">Production Volume</th>
              <th className="p-4 text-center text-xs">Service Area</th>
              {/* <th className="p-4 text-center text-xs">Documents</th> */}
              <th className="p-4 text-center text-xs">Verification</th>
              <th className="p-4 text-center text-xs text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredCompanies.map((company) => (
              <tr key={company.id} className="border-t border-gray-300 dark:text-gray-300 dark:bg-slate-900">
                <td className="p-4 text-center">{company.name}</td>
                <td className="p-4 text-center">{company.contactPerson}</td>
                <td className="p-4 text-center">{company.scale}</td>
                <td className="p-4 text-center">{company.farmsManaged}</td>
                <td className="p-4 text-center">{company.productionVolume}</td>
                <td className="p-4 text-center">{company.serviceArea}</td>
                {/* <td className="p-4 text-center">
                  <button
                    onClick={() => setDistrict(company)}
                    className="text-blue-600 hover:underline"
                  >
                    View Documents
                  </button>
                </td> */}
                <td className="p-4 text-center">
                  <span className={`px-2 py-1 rounded-full text-xs text-center font-medium ${statusColors[company.verified]}`}>{company.verified}</span>
                </td>
                <td className="p-4 text-center">
                  <div className="font-medium flex gap-1 justify-center">
                    <button className="text-green-600 px-2 py-1 rounded active:text-green-800 active:scale-95">View</button>                  </div>
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
