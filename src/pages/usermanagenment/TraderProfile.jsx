import React from 'react';
import { useParams } from 'react-router-dom';
import { tradersData } from './AproovedTraders'; // ✅ Make sure path is correct
import 'remixicon/fonts/remixicon.css'; // Import Remix Icon CSS

const TraderProfile = () => {
  const { id } = useParams();
  const trader = tradersData[parseInt(id)];

  if (!trader) {
    return <div className="p-6 text-red-500">Trader not found</div>;
  }

  return (
    <div className="p-2 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold m-2 text-gray-800 dark:text-gray-100 font-sans">Trader Profile</h2>

      <div className=" h-screen flex flex-col md:flex-row gap-6">
        {/* Avatar + Basic Info */}
        <div className="md:w-1/3 bg-white dark:bg-slate-900 rounded-xl p-6 shadow text-center">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=987&auto=format&fit=crop"
            alt="Trader Avatar"
            className=" m-4  w-40 h-40 mx-auto rounded-full shadow mb-4 object-cover border-4 border-green-500 dark:border-green-300 object-cover mb-4"
          />
          <p className=" mt-8 px-3 text-lg font-semibold text-gray-800 dark:text-gray-100">{trader.name}</p>
          <p className='px-3  text-xs text-gray-900 dark:text-gray-100'><strong><i class="ri-mail-line"></i></strong> {trader.email}</p>
            <p className="px-3  mt-6 pt-2 text-lg text-gray-500">{trader.source}</p>
            <p className='px-3  mt-6 pt-2 text-sm text-gray-500'><strong><i class="ri-map-pin-add-line"></i></strong> {trader.location}</p>

          <p className=" px-3 py-2 text-sm text-gray-500"><i class="ri-open-source-line"></i>{trader.business}</p>
          <p className=" px-3 py-2 text-sm text-gray-600"><i class="ri-phone-line"></i>{trader.phone}</p>
         {/* <div className="flex gap-16 justify-center mt-4">
            <button className='px-4 py-2 text-sm font-bold text-gray-900 dark:text-gray-100 bg-gray-200 border-2 rounded'>Delete</button>
            <button className='px-4 py-2 text-sm font-bold text-gray-900 dark:text-gray-100 bg-gray-200 border-2 rounded'>Edit</button>
          </div> */}
        </div>

        {/* Details */}
        <div className="md:w-2/3 bg-white dark:bg-slate-900 rounded-xl p- shadow text-lg text-gray-800 dark:text-gray-100">
        <div className="flex items-center ">
        <button className=' m-4 px-3 pb-4 text-lg font-semibold mt-6 text-gray-900 dark:text-gray-100 font-sans'>Profile Overview</button>
        <button className=' m-4  px-3 pb-4 text-lg font-semibold mt-6 text-gray-900 dark:text-gray-100 font sans'>Orders Overview</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 text-gray-800 dark:text-gray-100 ">
              <p  className='text-sm font-normal'><strong className='text-sm font-bold text-gray-900 dark:text-gray-100 font-sans '>Trader  :  </strong> {trader.business}</p>
          <p className='text-sm font-normal'><strong className='text-sm font-bold text-gray-900 dark:text-gray-100 font-sans '>Contact no  :  </strong> {trader.phone}</p>
          <p className='text-sm font-normal'><strong className='text-sm font-bold text-gray-900 dark:text-gray-100 font-sans '>Email  :  </strong> {trader.email}</p>
          <p className='text-sm font-normal'><strong className='text-sm font-bold text-gray-900 dark:text-gray-100 font-sans '>Location  :  </strong> {trader.location}</p>
          <p className='text-sm font-normal'><strong className='text-sm font-bold text-gray-900 dark:text-gray-100 font-sans '>District  :  </strong> {trader.district}</p>
          <p className='text-sm font-normal'><strong className='text-sm font-bold text-gray-900 dark:text-gray-100 font-sans '>GST  :  </strong> {trader.gst}</p>
          <p className='text-sm font-normal'><strong className='text-sm font-bold text-gray-900 dark:text-gray-100 font-sans '>PAN  :  </strong> {trader.pan}</p>
          <p className='text-sm font-normal'><strong className='text-sm font-bold text-gray-900 dark:text-gray-100 font-sans '>Bank Holder  :  </strong> {trader.bankHolder}</p>
          <p className='text-sm font-normal'><strong className='text-sm font-bold text-gray-900 dark:text-gray-100 font-sans '>IFSC  :  </strong> {trader.ifsc}</p>
          <p className='text-sm font-normal'>
            <strong className='text-sm font-bold text-gray-900 dark:text-gray-100 font-sans '>Status: </strong>
            <span className={`ml-2 px-2 py-1 rounded text-xs font-medium 
              ${
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
      </div>

      {/* Back Button */}
      <div className="mt-8 text-right">
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

export default TraderProfile;
