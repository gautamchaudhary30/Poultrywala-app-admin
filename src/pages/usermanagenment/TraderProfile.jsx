import React from 'react';
import { useParams } from 'react-router-dom';
import { tradersData } from './AproovedTraders'; // ✅ Make sure path is correct
import 'remixicon/fonts/remixicon.css'; // Import Remix Icon CSS

const TraderProfile = () => {
  const { id } = useParams();
  const trader = tradersData[parseInt(id)];
  const [activetab, setActivetab] = React.useState('profileoverview');



const ProfileOverviewComponent = () => <div className="p-4"></div>;
const OrdersComponent = () => <div className="p-4"></div>;
const DocumentsComponent = () => <div className="p-4"></div>;
const RatingsComponent = () => <div className="p-4"></div>;

 






  if (!trader) {
    return <div className="p-6 text-red-500">Trader not found</div>;
  }

  return (
    <div className="p-2 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold m-2 text-gray-800 dark:text-gray-100 font-sans">Trader Profile</h2>

      <div className=" h-full flex flex-col md:flex-row gap-6">
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
            <div className=' w-full flex justify-between'>
            <p className='px-3  mt-6 pt-2 text-sm text-gray-500'><strong><i class="ri-map-pin-add-line"></i></strong>   Location</p>
            <p className='px-3  mt-6 pt-2 text-sm text-gray-500'><strong></strong> {trader.location}</p>
            </div>
             <div className=' w-full flex justify-between'>
          <p className=" px-3 py-2 text-sm text-gray-500"><i class="ri-open-source-line"></i>   Name</p>
          <p className=" px-3 py-2 text-sm text-gray-500"><i class="ri-open-source-line"></i>{trader.business}</p>
          </div>
           <div className=' w-full flex justify-between'>
          <p className=" px-3 py-2 text-sm text-gray-600"><i class="ri-phone-line"></i>   Phone</p>
          <p className=" px-3 py-2 text-sm text-gray-600">{trader.phone}</p>
          </div>
          <div className="flex gap-16 justify-center mt-4 pb-10">
            <button className='px-10 py-2 text-sm font-bold font-[open_sans] text-gray-900 dark:text-gray-100 bg-gray-100 border  border-slate-500 rounded'>Delete</button>
            <button className='px-10 py-2 text-sm font-bold font-[open_sans] text-gray-900 dark:text-gray-100 bg-gray-100 border  border-slate-500 rounded'>Edit</button>
          </div> 
        </div>

        {/* Details */}
        <div className="md:w-2/3 bg-white dark:bg-slate-900 rounded-xl  shadow text-lg text-gray-800 dark:text-gray-100 overflow-hidden">
       <div className="flex items-center justify-between mb-4">
         <div className='w-32  flex justify-center hover:bg-blue-100 '>
  <button
    onClick={() => setActivetab('profileoverview')}
    className={` m-2 px-3 pb-4 text-sm font-bold mt-6 font-sans ${
      activetab === 'profileoverview'
      ? 'text-blue-600 border-b-2 border-blue-600'
      : 'text-gray-500 hover:text-blue-600'
    }`}
  >
    Profile 
  </button>
  </div>
  <div className=' w-32 border-wfull  text-center flex  justify-center hover:bg-blue-100'>
  <button
    onClick={() => setActivetab('orders')}
    className={`m-2 px-3 pb-4 text-sm font-bold mt-6 font-sans ${
      activetab === 'orders' 
        ? 'text-blue-600  border-w-full border-b-2 border-blue-600'
        : 'text-gray-500 hover:text-blue-600'
    }`}
  >
    Orders
  </button>
  </div>
  <div className=' w-32   flex justify-center hover:bg-blue-100'>
  <button
    onClick={() => setActivetab('documents')}
    className={`m-2 px-3 pb-4 text-sm font-bold mt-6 font-sans ${
      activetab === 'documents' 
        ? 'text-blue-600 border-b-2 border-blue-600'
        : 'text-gray-500 hover:text-blue-600'
    }`}
  >
    Documents 
  </button>
  </div>
  <div className=' w-32 flex justify-center hover:bg-blue-100'>
  <button
    onClick={() => setActivetab('ratings')}
    className={`m-2 px-3 pb-4 text-sm font-bold mt-6 font-sans ${
      activetab === 'ratings'
        ? 'text-blue-600 border-b-2 border-blue-600'
        : 'text-gray-500 hover:text-blue-600'   
    }`}
  > 
    Ratings
  </button>
  </div>
  
{activetab === 'profileoverview' && <ProfileOverviewComponent />}
{activetab === 'orders' && <OrdersComponent />}
{activetab === 'documents' && <DocumentsComponent />}
{activetab === 'ratings' && <RatingsComponent />}

</div>

        <div className='p-4 m-3'>
          <h3 className='text-lg font-bold'>About </h3>

          <p className=' text-sm font-normal  '> <strong ></strong>{trader.about}</p>

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

export default TraderProfile;
