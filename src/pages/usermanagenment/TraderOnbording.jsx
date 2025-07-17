import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const mockTrader = [
  {
    id: 1,
    name: "AgroFresh Pvt Ltd",
    contactPerson: "Sunil Mehta",
    scale: "Large",
    farmsManaged: 12,
    productionVolume: "5000 eggs/day",
    serviceArea: "MP, Maharashtra",
    gstNumber: "23ABCDE1234F1Z1",
    documents: {
      registration: "Agro_Reg.pdf",
      bank: "Agro_Bank.pdf",
      license: "Agro_License.pdf",
      fssai: "Agro_FSSAI.pdf",
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
    gstNumber: "09XYZAB4567C2Z2",
    documents: {
      registration: "Healthy_Reg.pdf",
      bank: "Healthy_Bank.pdf",
      license: "Healthy_License.pdf",
      fssai: null,
    },
    verified: "Approved",
  },
  {
    id: 3,
    name: "Green Valley Poultry",
    contactPerson: "Ravi Kumar",
    scale: "Small",
    farmsManaged: 3,
    productionVolume: "800 eggs/day",
    serviceArea: "Delhi, Haryana",
    gstNumber: "07GHJKL7890D3Z3",
    documents: {
      registration: "Green_Reg.pdf",
      bank: "Green_Bank.pdf",
      license: "Green_License.pdf",
      fssai: "Green_FSSAI.pdf",
    },
    verified: "Declined",
  },
  {
    id: 4,
    name: "Organic Chickens Co.",
    contactPerson: "Neha Rathi",
    scale: "Medium",
    farmsManaged: 6,
    productionVolume: "2000 chickens/day",
    serviceArea: "Rajasthan, Gujarat",
    gstNumber: "08MNOPQ1234E4Z4",
    documents: {
      registration: "Organic_Reg.pdf",
      bank: "Organic_Bank.pdf",
      license: "Organic_License.pdf",
      fssai: "Organic_FSSAI.pdf",
    },
    verified: "Pending",
  },
  {
    id: 5,
    name: "Eggland Farms",
    contactPerson: "Amit Patel",
    scale: "Large",
    farmsManaged: 10,
    productionVolume: "4000 eggs/day",
    serviceArea: "Punjab, HP",
    gstNumber: "03RSTUV5678F5Z5",
    documents: {
      registration: "Eggland_Reg.pdf",
      bank: "Eggland_Bank.pdf",
      license: "Eggland_License.pdf",
      fssai: null,
    },
    verified: "Approved",
  },
  {
    id: 6,
    name: "Sunrise Poultry",
    contactPerson: "Sunita Verma",
    scale: "Small",
    farmsManaged: 2,
    productionVolume: "600 chickens/day",
    serviceArea: "Chandigarh",
    gstNumber: "04WXYZA9012G6Z6",
    documents: {
      registration: "Sunrise_Reg.pdf",
      bank: "Sunrise_Bank.pdf",
      license: "Sunrise_License.pdf",
      fssai: "Sunrise_FSSAI.pdf",
    },
    verified: "Pending",
  },
  {
    id: 7,
    name: "Happy Hens India",
    contactPerson: "Rajeev Joshi",
    scale: "Medium",
    farmsManaged: 4,
    productionVolume: "1200 eggs/day",
    serviceArea: "Jharkhand, Chhattisgarh",
    gstNumber: "20ABCDEF3456H7Z7",
    documents: {
      registration: "Happy_Reg.pdf",
      bank: "Happy_Bank.pdf",
      license: "Happy_License.pdf",
      fssai: null,
    },
    verified: "Declined",
  },
  {
    id: 8,
    name: "Urban Chicken Mart",
    contactPerson: "Manish Gupta",
    scale: "Medium",
    farmsManaged: 5,
    productionVolume: "1300 chickens/day",
    serviceArea: "Delhi NCR",
    gstNumber: "07LMNOP6789I8Z8",
    documents: {
      registration: "Urban_Reg.pdf",
      bank: "Urban_Bank.pdf",
      license: "Urban_License.pdf",
      fssai: "Urban_FSSAI.pdf",
    },
    verified: "Approved",
  },
  {
    id: 9,
    name: "Prime Agro Solutions",
    contactPerson: "Vikash Singh",
    scale: "Large",
    farmsManaged: 15,
    productionVolume: "6000 eggs/day",
    serviceArea: "UP, MP",
    gstNumber: "09QRSTU1234J9Z9",
    documents: {
      registration: "Prime_Reg.pdf",
      bank: "Prime_Bank.pdf",
      license: "Prime_License.pdf",
      fssai: "Prime_FSSAI.pdf",
    },
    verified: "Approved",
  },
  {
    id: 10,
    name: "ChickMate Ltd.",
    contactPerson: "Kavita Desai",
    scale: "Small",
    farmsManaged: 2,
    productionVolume: "400 chickens/day",
    serviceArea: "Maharashtra",
    gstNumber: "27VWXYZ4567K0Z0",
    documents: {
      registration: "ChickMate_Reg.pdf",
      bank: "ChickMate_Bank.pdf",
      license: "ChickMate_License.pdf",
      fssai: null,
    },
    verified: "Pending",
  },
  {
    id: 11,
    name: "NestEggs Co.",
    contactPerson: "Rakesh Sharma",
    scale: "Medium",
    farmsManaged: 7,
    productionVolume: "2500 eggs/day",
    serviceArea: "Karnataka, Goa",
    gstNumber: "29ABCDE1234L1Z1",
    documents: {
      registration: "NestEggs_Reg.pdf",
      bank: "NestEggs_Bank.pdf",
      license: "NestEggs_License.pdf",
      fssai: "NestEggs_FSSAI.pdf",
    },
    verified: "Approved",
  },
  {
    id: 12,
    name: "Daily Eggs Corner",
    contactPerson: "Mohit Rana",
    scale: "Small",
    farmsManaged: 3,
    productionVolume: "750 eggs/day",
    serviceArea: "Uttarakhand",
    gstNumber: "05XYZAB4567M2Z2",
    documents: {
      registration: "DailyEggs_Reg.pdf",
      bank: "DailyEggs_Bank.pdf",
      license: "DailyEggs_License.pdf",
      fssai: null,
    },
    verified: "Declined",
  },
  {
    id: 13,
    name: "FarmFresh Foods",
    contactPerson: "Anil Mehta",
    scale: "Large",
    farmsManaged: 13,
    productionVolume: "4800 chickens/day",
    serviceArea: "Rajasthan, Gujarat",
    gstNumber: "08NOPQR6789N3Z3",
    documents: {
      registration: "FarmFresh_Reg.pdf",
      bank: "FarmFresh_Bank.pdf",
      license: "FarmFresh_License.pdf",
      fssai: "FarmFresh_FSSAI.pdf",
    },
    verified: "Pending",
  },
  {
    id: 14,
    name: "PoultryPro Services",
    contactPerson: "Rajiv Bansal",
    scale: "Large",
    farmsManaged: 14,
    productionVolume: "5200 eggs/day",
    serviceArea: "Haryana, Punjab",
    gstNumber: "06GHIJK1234O4Z4",
    documents: {
      registration: "PoultryPro_Reg.pdf",
      bank: "PoultryPro_Bank.pdf",
      license: "PoultryPro_License.pdf",
      fssai: "PoultryPro_FSSAI.pdf",
    },
    verified: "Approved",
  },
  {
    id: 15,
    name: "Bharat Poultry House",
    contactPerson: "Mahesh Yadav",
    scale: "Medium",
    farmsManaged: 8,
    productionVolume: "1800 chickens/day",
    serviceArea: "Madhya Pradesh, Chhattisgarh",
    gstNumber: "23LMNOP5678P5Z5",
    documents: {
      registration: "Bharat_Reg.pdf",
      bank: "Bharat_Bank.pdf",
      license: "Bharat_License.pdf",
      fssai: null,
    },
    verified: "Pending",
  }
];


const statusColors = {

  Pending: "bg-yellow-200 text-yellow-900",
  Declined: "bg-red-200 text-red-900",
};

export default function TraderOnboarding() {
  const [selectedTrader, setSelectedTrader] = useState(null);
  const [District, setDistrict] = useState("");
  const [status,setStatus] = useState("");
  const navigate = useNavigate();

  const filteredTrader = mockTrader.filter((trader) => {
    const matchesStatus = ["Pending", "Declined"].includes(trader.verified)
    const matchesDistrict = District ? trader.serviceArea.includes(District) : true;
    return matchesStatus && matchesDistrict;
  });

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-semibold dark:text-gray-100">Trader Onboarding Requests</h1>
        {/* <button
          onClick={() => navigate("/trader-registration")}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          + New Trader
        </button> */}
      </div>

      <div className="flex gap-4 mb-4">
        <select
          value={status}
          onChange={(e) =>setStatus(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="declined">Declined</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm border-slate-300 dark:border-gray-700">
          <thead className="bg-slate-100 dark:bg-slate-800 text-left justify-between">
            <tr>
              
              <th className="p-4 text-center">Trader Name</th>
              <th className="p-4 text-center">Phone</th>
              <th className="p-4 text-center">Operation Scale</th>
              <th className="p-4 text-center">Location</th>
              <th className="p-4 text-center">Production</th>
              <th className="p-4 text-center">GST No</th>
              <th className="p-4 text-center">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTrader.map((trader) => (
              <tr
                key={trader.id}
                className="border-t dark:border-slate-700 text-left justify-between dark:text-gray-200"
              >
                <td className="p-4 text-center">{trader.name}</td>
                <td className="p-4 text-center">{trader.contactPerson}</td>
                <td className="p-4 text-center">{trader.scale}</td>
                <td className="p-4 text-center">{trader.serviceArea}</td>
                <td className="p-4 text-center">{trader.productionVolume}</td>
                <td className="p-4 text-center">{trader.gstNumber}</td>
                <td className="p-4 text-center">
                 
                {/* </td>
                <td className="p-3"> */}
                  <span
                    className={`px-4 py-1 rounded-full text-center text-xs font-medium ${statusColors[trader.verified]}`}
                  >
                    {trader.verified}
                  </span>
                </td>
                <td className="p-4  flex gap-3 text-center space-x-1">
                   <button
                    onClick={() => navigate(`/trader-request-view/${trader.id}`)}
                    className="text-blue-600 text-center hover:underline decoration-none"
                  >
                    View
                  </button>
                  {/* <button className="text-green-600 hover:text-green-800 text-sm">Approve</button>
                  <button className="text-red-600 hover:text-red-800 text-sm">Decline</button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
