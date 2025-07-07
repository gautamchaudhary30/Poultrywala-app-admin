import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TraderRegistration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    aadharNumber: '',
    businessName: '',
    pin: '',
    city: '',
    state: '',
    licence: '',
    gst: '',
    adharcard: null,
    businessLicence: null,
    addressProof: null,
  });

  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const tempErrors = {};
    const phoneRegex = /^[0-9]{10}$/;
    const aadharRegex = /^[0-9]{12}$/;
    const pinRegex = /^[0-9]{6}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!phoneRegex.test(formData.contact)) tempErrors.contact = 'Enter a valid 10-digit number';
    if (!emailRegex.test(formData.email)) tempErrors.email = 'Enter a valid email address';
    if (!aadharRegex.test(formData.aadharNumber)) tempErrors.aadharNumber = 'Aadhar must be 12 digits';
    if (!formData.businessName.trim()) tempErrors.businessName = 'Business Name is required';
    if (!pinRegex.test(formData.pin)) tempErrors.pin = 'PIN must be 6 digits';
    if (!formData.city.trim()) tempErrors.city = 'City is required';
    if (!formData.state.trim()) tempErrors.state = 'State is required';
    if (!formData.licence.trim()) tempErrors.licence = 'Licence number is required';
    if (!formData.gst.trim()) tempErrors.gst = 'GST number is required';
    if (!formData.adharcard) tempErrors.adharcard = 'Upload Adharcard';
    if (!formData.businessLicence) tempErrors.businessLicence = 'Upload Business Licence';
    if (!formData.addressProof) tempErrors.addressProof = 'Upload Address Proof';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    if (validate()) {
      try {
        // Simulate form submission
        alert('Form submitted successfully!');
        // navigate('/success');
      } catch (err) {
        console.error(err);
        setSubmitError('Something went wrong while submitting the form.');
      }
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Trader Registration</h2>

      {submitError && (
        <div className="mb-4 bg-red-100 text-red-600 px-4 py-2 rounded">
          {submitError}
        </div>
      )}

      <form onSubmit={handleSubmit}>

        {/* TEXT INPUTS */}
        <InputField label="Full Name" name="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} error={errors.name} />

        <InputField
          label="Contact Number"
          name="contact"
          placeholder="Enter 10-digit contact number"
          type="tel"
          value={formData.contact}
          onChange={(e) => {
            const val = e.target.value;
            if (/^\d{0,10}$/.test(val)) handleChange(e);
          }}
          error={errors.contact}
        />
        <InputField
          label="Email Address" 
          name={"email"} 
          placeholder={"Enter your email address"} 
          type="email" value={formData.email} 
          onChange={handleChange} error={errors.email} />


        <InputField
          label="Aadhar Number"
          name="aadharNumber"
          placeholder="Enter 12-digit Aadhar number"
          type="text"
          value={formData.aadharNumber}
          onChange={(e) => {
            const val = e.target.value;
            if (/^\d{0,12}$/.test(val)) handleChange(e);
          }}
          error={errors.aadharNumber}
        />

        <InputField label="Business Name" name="businessName" placeholder="Enter your business name" value={formData.businessName} onChange={handleChange} error={errors.businessName} />

        <InputField
          label="PIN Code"
          name="pin"
          placeholder="Enter 6-digit PIN"
          value={formData.pin}
          onChange={(e) => {
            const val = e.target.value;
            if (/^\d{0,6}$/.test(val)) handleChange(e);
          }}
          error={errors.pin}
        />

        <InputField label="City" name="city" placeholder="Enter city" value={formData.city} onChange={handleChange} error={errors.city} />

        <InputField label="State" name="state" placeholder="Enter state" value={formData.state} onChange={handleChange} error={errors.state} />

        <InputField label="Licence Number" name="licence" placeholder="Enter licence number" value={formData.licence} onChange={handleChange} error={errors.licence} />

        <InputField label="GST Number" name="gst" placeholder="Enter GST number" value={formData.gst} onChange={handleChange} error={errors.gst} />

        {/* FILE UPLOADS */}
        <FileInput label="Upload Aadharcard (PDF/JPG/PNG)" name="adharcard" onChange={handleChange} error={errors.adharcard} />
        <FileInput label="Upload Business Licence (PDF/JPG/PNG)" name="businessLicence" onChange={handleChange} error={errors.businessLicence} />
        <FileInput label="Upload Address Proof (PDF/JPG/PNG)" name="addressProof" onChange={handleChange} error={errors.addressProof} />

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

// REUSABLE TEXT INPUT
const InputField = ({ label, name, value, onChange, error, type = 'text', placeholder }) => (
  <div className="mb-4">
    <label className="block mb-1 font-medium">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
    />
    {error && <span className="text-red-500 text-sm">{error}</span>}
  </div>
);

// REUSABLE FILE INPUT
const FileInput = ({ label, name, onChange, error }) => (
  <div className="mb-4">
    <label className="block mb-1 font-medium">{label}</label>
    <input
      type="file"
      name={name}
      accept=".pdf,.jpg,.jpeg,.png"
      onChange={onChange}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
    />
    {error && <span className="text-red-500 text-sm">{error}</span>}
  </div>
);

export default TraderRegistration;
