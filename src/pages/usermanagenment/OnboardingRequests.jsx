import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from 'datatables.net-dt';
import { useTheme } from "@/hooks/use-theme";

 

const traderData = [
  {
    business: "Company",
    company: "AgroFresh Pvt Ltd",
    head: "Ramesh Kumar",
    contact: "+91-9876543210",
    location: "Bihar, Patna",
    bank: "SBI",
    status: "Pending"
  },
  {
    business: "Individual Farmer",
    company: "Fresh Poultry Store",
    head: "Suresh Patel",
    contact: "+91-8765432109",
    location: "Gujarat, Ahmedabad",
    bank: "HDFC",
    status: "Approved"
  },
  {
    business: "Company",
    company: "Prime Agro Solutions",
    head: "Vikash Singh",
    contact: "+91-7654321098",
    location: "UP, Lucknow",
    bank: "ICICI",
    status: "Declined"
  },
  {
    business: "Company",
    company: "Green Valley Exports",
    head: "Pooja Sharma",
    contact: "+91-9876512345",
    location: "Punjab, Ludhiana",
    bank: "Axis Bank",
    status: "Pending"
  },
  {
    business: "Individual Farmer",
    company: "Urban Chicken Mart",
    head: "Manish Gupta",
    contact: "+91-9123456780",
    location: "Delhi, Rohini",
    bank: "PNB",
    status: "Approved"
  },
  {
    business: "Company",
    company: "FarmFresh Foods",
    head: "Anil Mehta",
    contact: "+91-9988776655",
    location: "Rajasthan, Jaipur",
    bank: "HDFC",
    status: "Pending"
  },
  {
    business: "Individual Farmer",
    company: "Daily Eggs Corner",
    head: "Sunita Verma",
    contact: "+91-9876543211",
    location: "Chandigarh",
    bank: "SBI",
    status: "Declined"
  },
  {
    business: "Company",
    company: "PoultryPro Services",
    head: "Rajiv Bansal",
    contact: "+91-8888999900",
    location: "Haryana, Karnal",
    bank: "ICICI",
    status: "Approved"
  },
  {
    business: "Individual Farmer",
    company: "Egg World",
    head: "Jyoti Mishra",
    contact: "+91-9988997766",
    location: "Uttarakhand, Dehradun",
    bank: "BOB",
    status: "Pending"
  },
  {
    business: "Company",
    company: "Bharat Poultry House",
    head: "Mahesh Yadav",
    contact: "+91-9876000000",
    location: "Madhya Pradesh, Bhopal",
    bank: "Axis Bank",
    status: "Approved"
  }
]



let table = new DataTable('#myTable');


const statusColors = {
    Approved: 'bg-green-300 text-white-700',
    Pending: 'bg-orange-200 text-yellow-700',
    Declined: 'bg-red-200 text-red-700',
};

const OnboardingRequests = () => {
    const [search, setsearch] = useState("")
    const [status, setstatus] = useState("")
    const [request, setrequest] = useState("")
    
    
    const filterData = traderData.filter((trader) => {
        const matchesSearch =
            trader.business.toLowerCase().includes(search.toLowerCase());
        const matchesStatus = status ? trader.status.toLowerCase() === status.toLowerCase() : true;
    
        const matchesRequest = request ? trader.business.toLowerCase() === request.toLowerCase() : true;

        return matchesSearch && matchesStatus && matchesRequest;
    });



    return (
        <div className='p-6'>
            {/* <div className='flex items-center justify-between mb-4'></div> */}
            <h1 className='text-3xl font-semibold mb-4 dark:text-gray-100'>Onboarding Requests</h1>
            <div className='flex flex-col mb-4'>
                <div className="flex items-center gap-5 p-x-1 w-full mb-4">
                    <select
                        value={status}
                        onChange={(e) => setstatus(e.target.value)}
                        className="p-1 border rounded "
                    >
                        <option value="">All Status</option>
                        <option value="pending">Pending</option>
                        <option value="approved">Approved</option>
                        <option value="declined">Declined</option>
                    </select>
                {/* </div>
                <div className="flex items-center justify-between w-full mb-4"> */}
                    {/* Search Input */}
                    <select
                        value={request}
                        onChange={(e) => setrequest(e.target.value)}
                        className="p-1 border rounded "
                    >
                        <option value="">All Request Types</option>
                        <option value="company">Company</option>
                        <option value="individual farmer">Individual Farmer</option>
                    </select>

                </div>




            </div>
            <div className="overflow-x-auto">
                <table className="min-w-[1089px] text-sm border border-gray-300 rounded ">
                    <thead className="bg-grey-100 text-left dark:bg-gray-100">
                        <tr>
                            <th className="p-4 text-xs">BUISNESS TYPE</th>
                            <th className="p-4 text-xs">COMPANY NAME</th>
                            <th className="p-4 text-xs">HEAD NAME</th>
                            <th className="p-4 text-xs">CONTACT</th>
                            <th className="p-4 text-xs">LOCATION</th>
                            <th className="p-4 text-xs">BANK</th>
                            <th className="p-4 text-xs">STATUS</th>
                            <th className="p-4 text-xs text-center">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterData.map((trader, index) => (
                            <tr key={index} className="border-t border-gray-300 dark:text-gray-300 dark:bg-slate-900">
                                <td className="p-4"><div className="font-small">{trader.business}</div></td> 
                                <td className="p-4"><div className="font-small">{trader.company}</div></td>
                                <td className="p-4"><div className="font-small">{trader.head}</div></td>
                                <td className="p-4"><div className="font-small">{trader.contact}</div></td>
                                <td className="p-4"><div className="font-small">{trader.location}</div></td>
                                <td className="p-4"><div className="font-small">{trader.bank}</div></td>
                                <td className="p-4"><span className={`px-2 py-1 rounded-full text-xs text-center text-neutral-700 font-medium ${statusColors[trader.status]}`}>{trader.status}</span></td>
                                <td className="p-4"><div className="font-medium flex gap-1">
                                    {<button className="text-blue-600  px-1 py-1 rounded active:text-blue-800 active:scale-95">View</button>}
                                    {<button className="text-green-600 px-1 py-1 rounded active:text-green-800 active:scale-95">Aproove</button>}
                                    {<button className="text-red-600 px-1 py-1 rounded active:text-red-800 active:scale-95">Decline</button>}</div></td >

                            </tr>
                        ))}

                    </tbody>
                </table>

            </div>
            <div className="flex justify-between items-center mt-4 text-sm">
                <span className="space-x-2 text-left px-2 py-1 dark:text-gray-300">
                    Showing {filterData.length > 0 ? 1 : 0} to {filterData.length} of {traderData.length} results
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
};


export default OnboardingRequests
