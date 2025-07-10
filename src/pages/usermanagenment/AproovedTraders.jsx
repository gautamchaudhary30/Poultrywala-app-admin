import React, { useState } from 'react';
import 'remixicon/fonts/remixicon.css'; // Import Remix Icon CSS

const tradersData = [
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
  },
  {
    business: 'Odisha Chicken Store',
    name: 'Bikash Ranjan',
    phone: '+91 9876543222',
    email: 'bikash@orichickens.com',
    location: 'Bhubaneswar, Odisha',
    district: 'Khurda District',
    gst: '21TYUIO6789A4S5',
    pan: 'TYUIO6789A',
    bankHolder: 'Bikash Ranjan',
    ifsc: 'KKBK0005566',
    status: 'Approved',
  },
  {
    business: 'West Bengal Poultry Traders',
    name: 'Ananya Ghosh',
    phone: '+91 9876543223',
    email: 'ananya@wbpoultry.in',
    location: 'Kolkata, West Bengal',
    district: 'Kolkata District',
    gst: '19BNMAS5678V2W3',
    pan: 'BNMAS5678V',
    bankHolder: 'Ananya Ghosh',
    ifsc: 'UTIB0006677',
    status: 'Approved',
  },

  {
    business: 'Poultry Express Ltd',
    name: 'Rajesh Kumar',
    phone: '+91 9876543210',
    email: 'rajesh@poultryexpress.com',
    location: 'Mumbai, Maharashtra',
    district: 'Thane District',
    gst: '27ABCDE1234F1Z5',
    pan: 'ABCDE1234F',
    bankHolder: 'Rajesh Kumar',
    ifsc: 'HDFC0001234',
    status: 'Approved',
  },
  {
    business: 'Farm Fresh Poultry',
    name: 'Priya Sharma',
    phone: '+91 9876543211',
    email: 'priya@farmfresh.com',
    location: 'Pune, Maharashtra',
    district: 'Pune District',
    gst: '27FGHIJ5678K2L6',
    pan: 'FGHIJ5678K',
    bankHolder: 'Priya Sharma',
    ifsc: 'ICICI0005678',
    status: 'Pending',
  },
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
  },
  // 👉 Added 7 more companies with dummy data after generated by chatgpt
];

const statusColors = {
  Approved: 'bg-green-400 text-white-700',
  Pending: 'bg-yellow-100 text-yellow-700',
};

const ApprovedTraders = () => {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [stateFilter, setStateFilter] = useState('');


  const filteredData = tradersData.filter((trader) => {
  const matchesSearch =
    [trader.business, trader.name, trader.email, trader.phone].some((field) =>
      field.toLowerCase().includes(search.toLowerCase())
    );

  const matchesStatus = statusFilter ? trader.status === statusFilter : true;
  const matchesState = stateFilter ? trader.location.includes(stateFilter) : true;

  return matchesSearch && matchesStatus && matchesState;
});


  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Approved Traders</h2>
        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-800"><i class="ri-download-fill"></i>Export</button>
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

      </div> */}
      <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
  {/* Search input */}
  <input
    type="text"
    placeholder="Search traders by name, email, or phone..."
    className="w-full md:w-1/3 p-2 border rounded"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  {/* Filters */}
  <div className="flex gap-2 w-full md:w-auto">
    {/* Status Filter */}
    <select
      value={statusFilter}
      onChange={(e) => setStatusFilter(e.target.value)}
      className="p-2 border rounded"
    >
      <option value="">All Status</option>
      <option value="Approved">Approved</option>
      <option value="Pending">Pending</option>
      <option value="Rejected">Rejected</option>
    </select>

    {/* State Filter */}
    <select
      value={stateFilter}
      onChange={(e) => setStateFilter(e.target.value)}
      className="p-2 border rounded"
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
      <table className="min-w-[1000px] text-sm border border-gray-200 rounded">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-2">Business Info</th>
            <th className="p-2">Contact</th>
            <th className="p-2">Location</th>
            <th className="p-2">Documents</th>
            <th className="p-2">Bank Details</th>
            <th className="p-2">Status</th>
            <th className="p-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((trader, index) => (
            <tr key={index} className="border-t">
              <td className="p-2">
                <div className="font-medium">{trader.business}</div>
                <div className="text-gray-500">{trader.name}</div>
              </td>
              <td className="p-2">
                <div>{trader.phone}</div>
                <div className="text-gray-500">{trader.email}</div>
              </td>
              <td className="p-2">
                <div className="font-medium">{trader.location}</div>
                <div className="text-gray-500">{trader.district}</div>
              </td>
              <td className="p-2">
                <div>GST: {trader.gst}</div>
                <div>PAN: {trader.pan}</div>
              </td>
              <td className="p-2">
                <div>{trader.bankHolder}</div>
                <div className="text-gray-500">{trader.ifsc}</div>
              </td>
              <td className="p-2">
                <span className={`px-2 py-1 rounded text-xs font-medium ${statusColors[trader.status]}`}>
                  {trader.status}
                </span>
              </td>
              <td className="p-2 text-center space-x-2">
                <button className="text-green-600 hover:underline">👁️</button>
                <buttom xlassName="text-blue-600 hover:underline">✅</buttom>
                <button className="text-red-600 hover:underline">❌</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      {/* Pagination Dummy */}
      <div className="flex justify-between items-center mt-4 text-sm">
        <span>
          Showing {filteredData.length > 0 ? 1 : 0} to {filteredData.length} of {tradersData.length} results
        </span>
        <div className="space-x-2">
          <button className="px-2 py-1 bg-gray-200 rounded">Previous</button>
          <button className="px-2 py-1 bg-green-500 text-white rounded">1</button>
          <button className="px-2 py-1 bg-gray-200 rounded">2</button>
          <button className="px-2 py-1 bg-gray-200 rounded">Next</button>
        </div>
      </div>
    </div>
  );
};

export default ApprovedTraders;
