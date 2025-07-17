import React, { useState } from 'react';
import 'remixicon/fonts/remixicon.css'; // Import Remix Icon CSS
import {useNavigate} from 'react-router-dom';

import DataTable from 'datatables.net-dt';
 

export const tradersData = [
  {
    business: 'Gujarat Poultry Hub',
    name: 'Amit Patel',
    phone: '+91 9876543212',
    email: 'amit@gujpoultryhub.com',
    location: 'Ahmedabad, Gujarat',
    district: 'Ahmedabad District',
    gst: '24MNOPQ9012R3S7',
    pan: 'MNOPQ9012R',
    bankHolder: 'Amit Patel',
    ifsc: 'SBI0009012',
    status: 'Approved',
    about: 'Gujarat Poultry Hub is a premier poultry trading firm known for its high-quality supply of chicken and eggs across Gujarat. With years of industry experience, the company focuses on hygienic processing, ethical sourcing, and strong customer relationships, making it a trusted name in the poultry ecosystem.'
  },
  {
    business: 'Rajasthan Egg Mart',
    name: 'Sunil Sharma',
    phone: '+91 9876543213',
    email: 'sunil@rajasthaneggs.com',
    location: 'Jaipur, Rajasthan',
    district: 'Jaipur District',
    gst: '08QWERT1234A5Z6',
    pan: 'QWERT1234A',
    bankHolder: 'Sunil Sharma',
    ifsc: 'PNB0002345',
    status: 'Pending',
    about: 'Rajasthan Egg Mart, based in Jaipur, supplies fresh eggs to retailers, restaurants, and bulk consumers. The business prides itself on timely delivery, competitive pricing, and maintaining freshness through a well-structured cold chain system.'
  },
  {
    business: 'Maharashtra Chicken Depot',
    name: 'Priya Deshmukh',
    phone: '+91 9876543214',
    email: 'priya@maha-chickens.in',
    location: 'Pune, Maharashtra',
    district: 'Pune District',
    gst: '27ZXCVB6789T1U2',
    pan: 'ZXCVB6789T',
    bankHolder: 'Priya Deshmukh',
    ifsc: 'HDFC0005678',
    status: 'Approved',
    about: 'Maharashtra Chicken Depot is a reputed poultry supplier in Pune serving both wholesale and retail clients. Known for its farm-fresh chicken and hygienic handling, the company ensures excellent quality control and transparent business practices.'
  },
  {
    business: 'Karnataka Poultry Distributors',
    name: 'Rahul Shetty',
    phone: '+91 9876543215',
    email: 'rahul@karnatakapoultry.in',
    location: 'Bengaluru, Karnataka',
    district: 'Bengaluru Urban',
    gst: '29LKJHG3456M7N8',
    pan: 'LKJHG3456M',
    bankHolder: 'Rahul Shetty',
    ifsc: 'ICIC0007890',
    status: 'Rejected',
    about: 'Karnataka Poultry Distributors connects poultry farmers to major food chains and local butchers in the Bengaluru region. The company emphasizes local sourcing, ethical practices, and supporting small-scale poultry growers.'
  },
  {
    business: 'Chennai Chicken Center',
    name: 'Lakshmi Narayan',
    phone: '+91 9876543216',
    email: 'lakshmi@chenchicken.com',
    location: 'Chennai, Tamil Nadu',
    district: 'Chennai District',
    gst: '33ASDFG1234P9Q0',
    pan: 'ASDFG1234P',
    bankHolder: 'Lakshmi Narayan',
    ifsc: 'IOBA0000123',
    status: 'Approved',
    about: 'Chennai Chicken Center is a local poultry store with a wide customer base in Tamil Nadu. The center is known for its prompt service, clean handling practices, and fresh poultry deliveries sourced directly from farms.'
  },
  {
    business: 'Uttar Pradesh Egg Supply',
    name: 'Akhil Verma',
    phone: '+91 9876543217',
    email: 'akhil@upeggsuppliers.in',
    location: 'Lucknow, Uttar Pradesh',
    district: 'Lucknow District',
    gst: '09POIUY5678R2T3',
    pan: 'POIUY5678R',
    bankHolder: 'Akhil Verma',
    ifsc: 'UBIN0004567',
    status: 'Pending',
    about: 'Uttar Pradesh Egg Supply operates a wide distribution network covering multiple districts. With a strong reputation for quality and quantity, the firm supplies eggs to institutions, local markets, and hospitality chains across the state.'
  },
  {
    business: 'Delhi Chicken Distributors',
    name: 'Nikita Arora',
    phone: '+91 9876543218',
    email: 'nikita@delhichickens.com',
    location: 'New Delhi, Delhi',
    district: 'New Delhi',
    gst: '07MNBVC3456L6K7',
    pan: 'MNBVC3456L',
    bankHolder: 'Nikita Arora',
    ifsc: 'SBIN0003210',
    status: 'Approved',
    about: 'Delhi Chicken Distributors is a popular poultry supplier in the capital region, serving restaurants and meat shops with consistent, timely deliveries. The company has built trust through service quality, safety standards, and affordable pricing.'
  },
  {
    business: 'Punjab Poultry World',
    name: 'Harpreet Singh',
    phone: '+91 9876543219',
    email: 'harpreet@punjabpoultry.com',
    location: 'Ludhiana, Punjab',
    district: 'Ludhiana District',
    gst: '03GHJKL7890D1F2',
    pan: 'GHJKL7890D',
    bankHolder: 'Harpreet Singh',
    ifsc: 'PUNB0011223',
    status: 'Approved',
    about: 'Punjab Poultry World is a modern poultry distributor with a mission to supply high-grade meat and eggs to Punjab’s consumers. The business follows strict hygienic protocols and maintains long-term farmer partnerships.'
  },
  {
    business: 'Bihar Egg Mart',
    name: 'Ravi Kumar',
    phone: '+91 9876543220',
    email: 'ravi@bihareggmart.in',
    location: 'Patna, Bihar',
    district: 'Patna District',
    gst: '10ERTYU1234Q5W6',
    pan: 'ERTYU1234Q',
    bankHolder: 'Ravi Kumar',
    ifsc: 'BOI0009988',
    status: 'Rejected',
    about: 'Bihar Egg Mart serves the Patna region with fresh, quality-assured eggs delivered daily. Their operations are built on community support, reliable logistics, and affordability for both vendors and end users.'
  },
  {
    business: 'Haryana Poultry Market',
    name: 'Suman Malik',
    phone: '+91 9876543221',
    email: 'suman@haryanapoultry.in',
    location: 'Faridabad, Haryana',
    district: 'Faridabad District',
    gst: '06CVBNM4567Z3X4',
    pan: 'CVBNM4567Z',
    bankHolder: 'Suman Malik',
    ifsc: 'YESB0004433',
    status: 'Pending',
    about: 'Haryana Poultry Market connects farm-fresh poultry with urban and rural buyers in northern India. Their flexible supply model and emphasis on customer satisfaction have helped them grow rapidly in Faridabad and beyond.'
  }
]


let table = new DataTable('#myTable');



const statusColors = {
  Approved: 'bg-green-400 text-white-700',
  Pending: 'bg-yellow-200 text-yellow-700',
  Rejected: 'bg-red-200 text-red-700',
};

const ApprovedTraders = () => {
  const [search, setSearch] = useState('');
  const [districtFilter, setDistrictFilter] = useState('');
  const [stateFilter, setStateFilter] = useState('');
  const [page, setpage] = useState(1)




  
    const navigate = useNavigate();
    const handleview = () => {
        navigate('/trader-registration${trader.index}');
    };


  const filteredData = tradersData.filter((trader) => {
  const matchesSearch =
    [trader.business, trader.name, trader.email, trader.phone].some((field) =>
      field.toLowerCase().includes(search.toLowerCase())
    );

  const matchesDistrict = districtFilter ? trader.location.includes(districtFilter) : true;
  const matchesState = stateFilter ? trader.location.includes(stateFilter) : true;

  return matchesSearch && matchesDistrict && matchesState && trader.status === 'Approved';
});


  return (
    <div className="p-6">
      <div className="flex items-center justify-between p-1 mb-4">
        <h2 className="text-3xl font-semibold dark:text-gray-100">Approved Traders</h2>
        {/* <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-800 active:bg-green-900 active:scale-95"><i class="ri-download-fill"></i>Export</button> */}
      </div>

      <p className="text-sm text-gray-500 mb-4">Manage and monitor approved trader accounts</p>

      {/* <div className="mb-4">
        <input
          type="text"
          placeholder="Search traders by name, email, or phone..."
          className="w-full p-2 border rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      // </div> */}

      {/* this is for search and filter option manually  */}
      <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
  {/* Search input */}
  <input
    type="text"
    placeholder="Search traders by name, email, or phone..."
    className="w-full md:w-1/3 p-2 border rounded-lg"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  {/* Filters */}
  <div className="flex gap-2 w-full md:w-auto">
    {/* Status Filter */}
    <select
      value={districtFilter}
      onChange={(e) => setDistrictFilter(e.target.value)}
      className="p-2 border rounded-lg transition"
    >
      <option className="p-2 border rounded transition" value="">All District</option>
      <option value="Ahmedabad">Ahmedabad</option>
      <option value="Jaipur">Jaipur</option>    
      <option value="Pune">Pune</option>
      <option value="Bengaluru">Bengaluru</option>
      <option value="Chennai">Chennai</option>
      <option value="Lucknow">Lucknow</option>
      <option value="New Delhi">New Delhi</option>
      <option value="Ludhiana">Ludhiana</option>
      <option value="Patna">Patna</option>
      <option value="Faridabad">Faridabad</option>

      
    </select>

    {/* State Filter */}
    <select
      value={stateFilter}
      onChange={(e) => setStateFilter(e.target.value)}
      className="p-2 border rounded-lg"
    >
      <option value="">All States</option>
      <option value="Maharashtra">Maharashtra</option>
      <option value="Gujarat">Gujarat</option>
      <option value="Rajasthan">Rajasthan</option>
      <option value="Karnataka">Karnataka</option>
      <option value="Tamil Nadu">Tamil Nadu</option>
      <option value="Uttar Pradesh">Uttar Pradesh</option>
      <option value="Delhi">Delhi</option>
      <option value="Punjab">Punjab</option>
      <option value="Bihar">Bihar</option>
    </select>
  </div>
</div>


      <div className='overflow-x-auto'>
      <table className="min-w-[1089px] text-sm border border-gray-200 rounded">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-4 text-center">Business Info</th>
            <th className="p-4 text-center">Contact</th>
            <th className="p-4 text-center">Location</th>
            <th className="p-4 text-center">Documents</th>
            <th className="p-4 text-center">Bank Details</th>
            <th className="p-4 text-center">Status</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.slice(page*10-10,page*10).map((trader, index) => (
            <tr key={index} className="border-t dark:text-gray-300 dark:bg-slate-900">
              <td className="p-4 text-center">
                <div className="font-medium">{trader.business}</div>
                <div className="text-gray-500">{trader.name}</div>
              </td>
              <td className="p-4 text-center">
                <div>{trader.phone}</div>
                <div className="text-gray-500">{trader.email}</div>
              </td>
              <td className="p-4 text-center">
                <div className="font-medium">{trader.location}</div>
                <div className="text-gray-500">{trader.district}</div>
              </td>
              <td className="p-4 text-center">
                <div>GST: {trader.gst}</div>
                <div>PAN: {trader.pan}</div>
              </td>
              <td className="p-4 text-center">
                <div>{trader.bankHolder}</div>
                <div className="text-gray-500">{trader.ifsc}</div>
              </td>
              <td className="p-4 text-center">
                <div className={`px-2 py-1 rounded text-xs font-medium ${statusColors[trader.status]}`}>
                  {trader.status}
                </div>
              </td>
              <td className="p-4 text-center">
                <button 
                onClick={() => navigate(`/trader-registration/${index}`)} 
                className="text-green-600 active:scale-95">view</button>
              
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      {/* Pagination Dummy */}
      <div className="flex justify-between items-center mt-4 text-sm">
        <span className='space-x-2 text-left px-2 py-1 dark:text-gray-300'>
          Showing {filteredData.length > 0 ? 1 : 0} to {filteredData.length} of {tradersData.length} results
        </span>
        <div className="space-x-2 text-right">
          
          <span className="px-2 py-1 m-2 bg-gray-200 rounded">Previous</span>
          <span className="px-2 py-1 m-2 bg-green-500 text-white rounded">1</span>
          <span className="px-2 py-1 m-2 bg-gray-200 rounded">2</span>
          <span className="px-2 py-1 m-2 bg-gray-200 rounded">Next</span>
        </div>
      </div>
    </div>
  );
};

export default ApprovedTraders;
