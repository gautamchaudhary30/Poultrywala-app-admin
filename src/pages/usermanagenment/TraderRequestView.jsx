import React from 'react';
import { useParams } from 'react-router-dom';
import { mockTrader } from './TraderOnbording';

const TraderRequestView = () => {
  const { id } = useParams(); 
  const trader = mockTrader.find((t) => t.id === parseInt(id));

  if (!trader) {
    return <div className="p-10 text-red-500">Trader not found!</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 p-4 lg:p-10 w-screen text-black dark:text-white">
      <h1 className="text-2xl font-bold mb-6">Trader Details</h1>
      <div className="space-y-3">
        <p><strong>Name:</strong> {trader.name}</p>
        <p><strong>Contact Person:</strong> {trader.contactPerson}</p>
        <p><strong>Location:</strong> {trader.serviceArea}</p>
        <p><strong>GST Number:</strong> {trader.gstNumber}</p>
        <p><strong>Status:</strong> {trader.verified}</p>
      </div>
    </div>
  );
};

export default TraderRequestView;
 