import React from 'react';
import { useParams } from 'react-router-dom';
import { tradersData } from './AproovedTraders';
import 'remixicon/fonts/remixicon.css';

const TraderProfile = () => {
  const { id } = useParams();
  const trader = tradersData[parseInt(id)];
  const [activetab, setActivetab] = React.useState('profile');

  if (!trader) return <div className="p-6 text-red-500">Trader not found</div>;

  const OrdersComponent = () => (
    <div className="p-6">
      <h3 className="text-lg font-bold mb-2">Orders</h3>
      <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
        <li>Order #1001 – 500 Eggs – Delivered</li>
        <li>Order #1002 – 200 Chickens – In Transit</li>
      </ul>
    </div>
  );

  const DocumentsComponent = () => (
    <div className="p-6">
      <h3 className="text-lg font-bold mb-2">Documents</h3>
      <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
        <li>GST Certificate.pdf</li>
        <li>PAN Card.jpg</li>
      </ul>
    </div>
  );

  const RatingsComponent = () => (
    <div className="p-6">
      <h3 className="text-lg font-bold mb-2">Ratings</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">⭐ 4.5 / 5 from 36 reviews</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 p-4 lg:p-10 w-full">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Trader Profile</h2>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Section */}
          <div className="lg:w-1/3 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=987&auto=format&fit=crop"
              alt="Trader Avatar"
              className="w-32 h-32 mx-auto rounded-full border-4 border-green-500 object-cover mb-4"
            />
            <p className="text-center text-xl font-semibold mb-1">{trader.name}</p>
            <p className="text-center text-sm text-gray-600 dark:text-gray-300 mb-4">
              <i className="ri-mail-line mr-1"></i>{trader.email}
            </p>

            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex justify-between">
                <span><i className="ri-map-pin-line mr-1"></i>Location</span>
                <span>{trader.location}</span>
              </div>
              <div className="flex justify-between">
                <span><i className="ri-open-source-line mr-1"></i>Business</span>
                <span>{trader.business}</span>
              </div>
              <div className="flex justify-between">
                <span><i className="ri-phone-line mr-1"></i>Phone</span>
                <span>{trader.phone}</span>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-6">
              <button className="px-6 py-2 text-sm border rounded hover:bg-gray-100 dark:hover:bg-slate-700">Delete</button>
              <button className="px-6 py-2 text-sm border rounded hover:bg-gray-100 dark:hover:bg-slate-700">Edit</button>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-2/3 bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
            {/* Tabs */}
            <div className="flex flex-wrap border-b px-4">
              {['profile', 'orders', 'documents', 'ratings'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActivetab(tab)}
                  className={`py-4 px-4 text-sm font-semibold transition-all duration-200 ${
                    activetab === tab
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-blue-600'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activetab === 'profile' && (
              <div className="p-6 text-sm text-gray-800 dark:text-gray-100">
                {/* About on top alone */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-2">About</h3>
                  <p>{trader.about}</p>
                </div>

                {/* Properties below About */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <p><strong>Trader:</strong> {trader.business}</p>
                  <p><strong>Contact:</strong> {trader.phone}</p>
                  <p><strong>Email:</strong> {trader.email}</p>
                  <p><strong>Location:</strong> {trader.location}</p>
                  <p><strong>District:</strong> {trader.district}</p>
                  <p><strong>GST:</strong> {trader.gst}</p>
                  <p><strong>PAN:</strong> {trader.pan}</p>
                  <p><strong>Bank Holder:</strong> {trader.bankHolder}</p>
                  <p><strong>IFSC:</strong> {trader.ifsc}</p>
                  <p>
                    <strong>Status:</strong>
                    <span className={`ml-2 px-2 py-1 rounded text-xs font-medium ${
                      trader.status === 'Approved'
                        ? 'bg-green-100 text-green-700'
                        : trader.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {trader.status}
                    </span>
                  </p>
                </div>
              </div>
            )}

            {activetab === 'orders' && <OrdersComponent />}
            {activetab === 'documents' && <DocumentsComponent />}
            {activetab === 'ratings' && <RatingsComponent />}
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-6 text-right">
          <button
            onClick={() => window.history.back()}
            className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-slate-900 transition"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default TraderProfile;
