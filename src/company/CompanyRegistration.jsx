import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CompanyRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: '',
    contactInfo: '',
    operationScale: '',
    farmsManaged: '',
    productionVolume: '',
    serviceArea: '',
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    accountHolderName: '',
    gstNumber: '',
    fssaiLicence: '',
    farmDataCSV: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateGST = (gst) => {
    const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    return gstRegex.test(gst);
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.companyName) tempErrors.companyName = 'Company Name is required';
    if (!formData.contactInfo) tempErrors.contactInfo = 'Contact Info is required';
    if (!formData.operationScale) tempErrors.operationScale = 'Operation Scale is required';
    if (!formData.farmsManaged) tempErrors.farmsManaged = 'Farms Managed is required';
    if (!formData.productionVolume) tempErrors.productionVolume = 'Production Volume is required';
    if (!formData.serviceArea) tempErrors.serviceArea = 'Service Area is required';

    if (!formData.bankName) tempErrors.bankName = 'Bank Name is required';
    if (!formData.accountNumber) tempErrors.accountNumber = 'Account Number is required';
    if (!formData.ifscCode) tempErrors.ifscCode = 'IFSC Code is required';
    if (!formData.accountHolderName) tempErrors.accountHolderName = 'Account Holder Name is required';

    if (!formData.gstNumber || !validateGST(formData.gstNumber)) {
      tempErrors.gstNumber = 'Valid GST Number is required';
    }

    if (formData.farmDataCSV === null) {
      tempErrors.farmDataCSV = 'Farm Data CSV is required';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
      // handle backend integration or navigation
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Company Registration</h2>
      <form onSubmit={handleSubmit}>
        {[
          { label: 'Company Name', name: 'companyName', placeholder: 'Enter company name' },
          { label: 'Contact Info', name: 'contactInfo', placeholder: 'Enter contact number or email' },
          { label: 'Operation Scale', name: 'operationScale', placeholder: 'e.g. Local / National' },
          { label: 'Farms Managed', name: 'farmsManaged', placeholder: 'Total number of farms managed' },
          { label: 'Production Volume', name: 'productionVolume', placeholder: 'e.g. 1000 tons/year' },
          { label: 'Service Area', name: 'serviceArea', placeholder: 'e.g. Madhya Pradesh' },
        ].map(({ label, name, placeholder }) => (
          <div className="mb-4" key={name}>
            <label className="block mb-1 font-medium">{label}</label>
            <input
              type="text"
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              placeholder={placeholder}
            />
            {errors[name] && <span className="text-red-500 text-sm">{errors[name]}</span>}
          </div>
        ))}

        {/* Bank Details */}
        <h3 className="text-lg font-semibold mt-6 mb-2">Bank Details</h3>
        {[
          { label: 'Account Holder Name', name: 'accountHolderName', placeholder: 'Enter account holder name' },
          { label: 'Account Number', name: 'accountNumber', placeholder: 'Enter account number' },
          { label: 'IFSC Code', name: 'ifscCode', placeholder: 'Enter IFSC code' },
          { label: 'Bank Name', name: 'bankName', placeholder: 'Enter bank name' },
        ].map(({ label, name, placeholder}) => (
          <div className="mb-4" key={name}>
            <label className="block mb-1 font-medium">{label}</label>
            <input
              type="text"
              name={name}
              value={formData[name]}
              onChange={handleChange}
              placeholder={placeholder}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
            {errors[name] && <span className="text-red-500 text-sm">{errors[name]}</span>}
          </div>
        ))}

        {/* GST Number */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">GST Number</label>
          <input
            type="text"
            name="gstNumber"
            value={formData.gstNumber}
            onChange={handleChange}
            maxLength={15}
            placeholder="Enter valid GST number"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          />
          {errors.gstNumber && <span className="text-red-500 text-sm">{errors.gstNumber}</span>}
        </div>

        {/* FSSAI Certificate (Optional) */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">FSSAI Certificate (Optional)</label>
          <input
            type="file"
            name="fssaiLicence"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        {/* Farm Data CSV */}
        <div className="mb-6">
          <label className="block mb-1 font-medium">Upload Farm Data (CSV)</label>
          <input
            type="file"
            name="farmDataCSV"
            accept=".csv"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          />
          {errors.farmDataCSV && <span className="text-red-500 text-sm">{errors.farmDataCSV}</span>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default CompanyRegistration;