import React from 'react';
import { useParams } from 'react-router-dom';
import { companiesData } from './AproovedCompanies'; // ✅ Make sure this is the correct path
import 'remixicon/fonts/remixicon.css';

const CompanyProfile = () => {
  const { id } = useParams();
  const company = companiesData[parseInt(id)];
  const [activetab, setActivetab] = React.useState('profileoverview');

  // Dummy tab components (you can expand later)
  const ProfileOverviewComponent = () => <div className="p-4">Overview Content</div>;
  const OrdersComponent = () => <div className="p-4">Orders Content</div>;
  const DocumentsComponent = () => <div className="p-4">Documents Content</div>;
  const RatingsComponent = () => <div className="p-4">Ratings Content</div>;

  if (!company) {
    return <div className="p-6 text-red-500">Company not found</div>;
  }

  return (
    <div className="p-2 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold m-2 text-gray-800 dark:text-gray-100 font-sans">Company Profile</h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left: Avatar and Basic Info */}
        <div className="md:w-1/3 bg-white dark:bg-slate-900 rounded-xl p-6 shadow text-center">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=987&auto=format&fit=crop"
            alt="Company Avatar"
            className="w-40 h-40 mx-auto rounded-full shadow mb-4 object-cover border-4 border-green-500 dark:border-green-300"
          />
          <p className="text-lg font-semibold text-gray-800 dark:text-gray-100 mt-4">{company.name}</p>
          <p className="text-sm text-gray-500"><i className="ri-mail-line"></i> {company.email}</p>
          <p className="text-sm text-gray-500 mt-2"><i className="ri-map-pin-line"></i> {company.location}</p>
          <p className="text-sm text-gray-500 mt-1">{company.district}</p>

          <div className="mt-6 flex justify-between text-sm text-gray-600">
            <p><i className="ri-building-4-line"></i> Business</p>
            <p>{company.business}</p>
          </div>

          <div className="flex justify-between text-sm text-gray-600">
            <p><i className="ri-phone-line"></i> Phone</p>
            <p>{company.phone}</p>
          </div>

          <div className="flex gap-6 justify-center mt-4 pb-6">
            <button className="px-6 py-2 bg-gray-100 dark:text-gray-100 border border-slate-500 rounded">Delete</button>
            <button className="px-6 py-2 bg-gray-100 dark:text-gray-100 border border-slate-500 rounded">Edit</button>
          </div>
        </div>

        {/* Right: Details & Tabs */}
        <div className="md:w-2/3 bg-white dark:bg-slate-900 rounded-xl shadow overflow-hidden">
          <div className="flex items-center justify-between mb-4 border-b">
            {['profileoverview', 'orders', 'documents', 'ratings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActivetab(tab)}
                className={`w-1/4 text-center py-3 font-bold text-sm ${
                  activetab === tab
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                    : 'text-gray-500 hover:text-blue-600'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activetab === 'profileoverview' && <ProfileOverviewComponent />}
          {activetab === 'orders' && <OrdersComponent />}
          {activetab === 'documents' && <DocumentsComponent />}
          {activetab === 'ratings' && <RatingsComponent />}

          {/* About Section */}
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">About</h3>
            <p className="text-sm">{company.about}</p>
          </div>

          {/* Grid Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 text-sm">
            <p><strong>Business:</strong> {company.business}</p>
            <p><strong>Phone:</strong> {company.phone}</p>
            <p><strong>Email:</strong> {company.email}</p>
            <p><strong>Location:</strong> {company.location}</p>
            <p><strong>District:</strong> {company.district}</p>
            <p><strong>GST:</strong> {company.gst}</p>
            <p><strong>PAN:</strong> {company.pan}</p>
            <p><strong>Bank Holder:</strong> {company.bankHolder}</p>
            <p><strong>IFSC:</strong> {company.ifsc}</p>
            <p>
              <strong>Status:</strong>{' '}
              <span className={`ml-2 px-2 py-1 rounded text-xs font-medium ${
                company.status === 'Approved'
                  ? 'bg-green-100 text-green-700'
                  : company.status === 'Pending'
                  ? 'bg-yellow-100 text-yellow-700'
                  : 'bg-red-100 text-red-700'
              }`}>
                {company.status}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-4 text-right">
        <button
          onClick={() => window.history.back()}
          className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-slate-900 transition"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default CompanyProfile;
