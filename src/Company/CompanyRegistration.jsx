import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CompanyRegistration = () => {
  const navigate = useNavigate();
  const inputRefs = useRef([]);

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
    let updatedValue = value;

    if (name === 'contactInfo') {
      updatedValue = value.replace(/\D/g, '').slice(0, 10);
    }

    if (name === 'accountNumber' || name === 'farmsManaged') {
      updatedValue = value.replace(/\D/g, '');
    }

    if (name === 'ifscCode') {
      updatedValue = value.toUpperCase().slice(0, 11);
    }

    const newData = files
      ? { ...formData, [name]: files[0] }
      : { ...formData, [name]: updatedValue };

    setFormData(newData);

    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const validateGST = (gst) => {
    const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    return gstRegex.test(gst);
  };

  const validate = () => {
    let tempErrors = {};
    const requiredFields = [
      'companyName', 'contactInfo', 'operationScale', 'farmsManaged',
      'productionVolume', 'serviceArea', 'bankName', 'accountNumber',
      'ifscCode', 'accountHolderName'
    ];

    requiredFields.forEach(field => {
      if (!formData[field]) {
        tempErrors[field] = `${field.replace(/([A-Z])/g, ' $1')} is required`;
      }
    });

    if (!formData.gstNumber || !validateGST(formData.gstNumber)) {
      tempErrors.gstNumber = 'Valid GST Number is required';
    }

    if (!formData.farmDataCSV) {
      tempErrors.farmDataCSV = 'Farm Data CSV is required';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (inputRefs.current[index + 1]) {
        inputRefs.current[index + 1].focus();
      } else {
        handleSubmit(e);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
      // navigate('/success');
    }
  };

  const renderInput = (label, name, placeholder, index, type = 'text') => (
    <div className="mb-4">
      <label className="block mb-1 font-medium">{label}</label>
      <input
        ref={(el) => (inputRefs.current[index] = el)}
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        onKeyDown={(e) => handleKeyDown(e, index)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        placeholder={placeholder}
      />
      {errors[name] && <span className="text-red-500 text-sm">{errors[name]}</span>}
    </div>
  );

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Company Registration</h2>
      <form onSubmit={handleSubmit}>
        {renderInput('Company Name', 'companyName', 'Enter company name', 0)}
        {renderInput('Contact Info', 'contactInfo', 'Enter 10-digit contact number', 1)}
        {renderInput('Operation Scale', 'operationScale', 'e.g. Local / National', 2)}
        {renderInput('Farms Managed', 'farmsManaged', 'Total number of farms managed', 3, 'number')}
        {renderInput('Production Volume', 'productionVolume', 'e.g. 1000 tons/year', 4)}
        {renderInput('Service Area', 'serviceArea', 'e.g. Madhya Pradesh', 5)}

        <h3 className="text-lg font-semibold mt-6 mb-2">Bank Details</h3>
        {renderInput('Account Holder Name', 'accountHolderName', 'Enter account holder name', 6)}
        {renderInput('Account Number', 'accountNumber', 'Enter account number', 7)}
        {renderInput('IFSC Code', 'ifscCode', 'Enter IFSC code', 8)}
        {renderInput('Bank Name', 'bankName', 'Enter bank name', 9)}

        {renderInput('GST Number', 'gstNumber', 'Enter valid GST number', 10)}

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